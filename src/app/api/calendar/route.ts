import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

// Configuration Google Calendar
const CREDENTIALS_PATH = path.join(process.cwd(), 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CALENDAR_ID = 'mhadvisory.contact@gmail.com';

// Scopes nécessaires
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
];

interface BookingRequest {
  name: string;
  email: string;
  motif: string;
  date: string;
  time: string;
}

/**
 * Charge les credentials depuis le fichier client_secret
 */
function loadCredentials() {
  try {
    const content = fs.readFileSync(CREDENTIALS_PATH, 'utf-8');
    const credentials = JSON.parse(content);
    return credentials.web;
  } catch (error) {
    console.error('Erreur lors de la lecture des credentials:', error);
    throw new Error('Credentials Google non trouvés');
  }
}

/**
 * Charge le token depuis le fichier token.json
 */
function loadToken() {
  try {
    if (fs.existsSync(TOKEN_PATH)) {
      const content = fs.readFileSync(TOKEN_PATH, 'utf-8');
      return JSON.parse(content);
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de la lecture du token:', error);
    return null;
  }
}

/**
 * Initialise le client OAuth2
 */
function getOAuth2Client() {
  const credentials = loadCredentials();
  const { client_secret, client_id, redirect_uris } = credentials;
  
  const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);
  
  const token = loadToken();
  if (token) {
    oAuth2Client.setCredentials(token);
  }
  
  return oAuth2Client;
}

/**
 * Vérifie si un créneau est disponible
 */
async function isTimeSlotAvailable(auth: OAuth2Client, date: string, time: string) {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Convertir la date et l'heure en objets Date
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000); // +30 minutes
    
    // Vérifier les événements existants
    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: startDateTime.toISOString(),
      timeMax: endDateTime.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items || [];
    
    // Si aucun événement trouvé, le créneau est libre
    return events.length === 0;
  } catch (error) {
    console.error('Erreur lors de la vérification des créneaux:', error);
    return false;
  }
}

/**
 * Crée un événement dans Google Calendar
 */
async function createCalendarEvent(auth: OAuth2Client, booking: BookingRequest) {
  try {
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Convertir la date et l'heure en objets Date
    const startDateTime = new Date(`${booking.date}T${booking.time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000); // +30 minutes
    
    const event = {
      summary: `Rendez-vous MH Advisory – ${booking.motif}`,
      description: `Client : ${booking.name}\nEmail : ${booking.email}\nMotif : ${booking.motif}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Paris',
      },
      location: 'Google Meet',
      attendees: [
        {
          email: booking.email,
          displayName: booking.name,
        },
        {
          email: CALENDAR_ID,
          displayName: 'MH Advisory',
        },
      ],
      conferenceData: {
        createRequest: {
          requestId: `mh-advisory-${Date.now()}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 24h avant
          { method: 'popup', minutes: 30 }, // 30min avant
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: event,
      conferenceDataVersion: 1,
    });

    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de l\'événement:', error);
    throw new Error('Impossible de créer l\'événement dans le calendrier');
  }
}

/**
 * Valide les données de réservation
 */
function validateBookingData(data: any): data is BookingRequest {
  return (
    data &&
    typeof data.name === 'string' && data.name.trim().length > 0 &&
    typeof data.email === 'string' && data.email.includes('@') &&
    typeof data.motif === 'string' && data.motif.trim().length > 0 &&
    typeof data.date === 'string' && data.date.match(/^\d{4}-\d{2}-\d{2}$/) &&
    typeof data.time === 'string' && data.time.match(/^\d{2}:\d{2}$/)
  );
}

/**
 * Vérifie si l'heure est dans les créneaux autorisés (10h-19h)
 */
function isValidTimeSlot(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  
  // Vérifier que c'est entre 10h et 19h
  const minTime = 10 * 60; // 10:00
  const maxTime = 19 * 60; // 19:00
  
  return timeInMinutes >= minTime && timeInMinutes <= maxTime;
}

/**
 * Vérifie si la date est un jour ouvrable (lundi-samedi)
 */
function isWorkingDay(date: string): boolean {
  const dayOfWeek = new Date(date).getDay();
  return dayOfWeek >= 1 && dayOfWeek <= 6; // 1 = lundi, 6 = samedi
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    if (!validateBookingData(body)) {
      return NextResponse.json(
        { error: 'Données de réservation invalides' },
        { status: 400 }
      );
    }

    // Validation de l'heure
    if (!isValidTimeSlot(body.time)) {
      return NextResponse.json(
        { error: 'Heure non autorisée. Les créneaux sont disponibles entre 10h et 19h' },
        { status: 400 }
      );
    }

    // Validation du jour
    if (!isWorkingDay(body.date)) {
      return NextResponse.json(
        { error: 'Les rendez-vous ne sont pas disponibles le dimanche' },
        { status: 400 }
      );
    }

    // Initialiser le client OAuth2
    const auth = getOAuth2Client();
    
    // Vérifier si le token est valide
    if (!auth.credentials || !auth.credentials.access_token) {
      return NextResponse.json(
        { error: 'Configuration Google Calendar manquante. Veuillez contacter l\'administrateur.' },
        { status: 503 }
      );
    }

    // Vérifier si le créneau est disponible
    const isAvailable = await isTimeSlotAvailable(auth, body.date, body.time);
    
    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Ce créneau n\'est plus disponible' },
        { status: 409 }
      );
    }

    // Créer l'événement
    const event = await createCalendarEvent(auth, body);
    
    return NextResponse.json({
      success: true,
      message: 'Rendez-vous créé avec succès',
      eventId: event.id,
      meetingLink: event.conferenceData?.entryPoints?.[0]?.uri,
      startTime: event.start?.dateTime,
      endTime: event.end?.dateTime
    });

  } catch (error) {
    console.error('Erreur API Calendar:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'API Calendar MH Advisory - Endpoint POST pour créer des rendez-vous' },
    { status: 200 }
  );
}
