import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import fs from 'fs';
import path from 'path';

// Configuration dayjs pour les fuseaux horaires
dayjs.extend(utc);
dayjs.extend(timezone);

// Chemins des fichiers de configuration
const CREDENTIALS_PATH = path.join(process.cwd(), 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(process.cwd(), 'token.json');

// Configuration des créneaux
const WORKING_HOURS = {
  start: 10, // 10h
  end: 19    // 19h
};

const WORKING_DAYS = [1, 2, 3, 4, 5, 6]; // Lundi à Samedi (0 = Dimanche)
const MEETING_DURATION_MINUTES = 30;

// IDs des calendriers
const PROFESSIONAL_CALENDAR_ID = 'primary'; // mhadvisory.contact@gmail.com
const STUDENT_CALENDAR_ID = process.env.GOOGLE_STUDENT_CALENDAR_ID; // Calendrier étudiant (lecture seule)

interface BookingRequest {
  name: string;
  email: string;
  reason: string;
  date: string;
  time: string;
}

/**
 * Charge les credentials Google
 */
function loadCredentials() {
  try {
    const content = fs.readFileSync(CREDENTIALS_PATH, 'utf-8');
    const credentials = JSON.parse(content);
    return credentials.web;
  } catch (error) {
    console.error('Erreur lors de la lecture des credentials:', error);
    throw new Error('Credentials non trouvés');
  }
}

/**
 * Charge le token d'accès
 */
function loadToken() {
  try {
    const content = fs.readFileSync(TOKEN_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Erreur lors de la lecture du token:', error);
    throw new Error('Token non trouvé');
  }
}

/**
 * Configure le client OAuth2
 */
function getAuthClient() {
  const credentials = loadCredentials();
  const token = loadToken();
  
  const { client_secret, client_id, redirect_uris } = credentials;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  
  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}

/**
 * Vérifie si une date est disponible (pas de weekend)
 */
function isDateAvailable(date: string): boolean {
  const dayOfWeek = dayjs(date).day();
  return WORKING_DAYS.includes(dayOfWeek);
}

/**
 * Génère les créneaux horaires disponibles
 */
function generateTimeSlots(): string[] {
  const slots: string[] = [];
  
  for (let hour = WORKING_HOURS.start; hour < WORKING_HOURS.end; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  
  return slots;
}

/**
 * Vérifie la disponibilité d'un créneau
 */
async function checkAvailability(calendar: any, date: string, time: string): Promise<boolean> {
  try {
    const startTime = dayjs.tz(`${date}T${time}:00`, 'Europe/Paris');
    const endTime = startTime.add(MEETING_DURATION_MINUTES, 'minutes');
    
    // Vérifier dans le calendrier professionnel
    const professionalEvents = await calendar.events.list({
      calendarId: PROFESSIONAL_CALENDAR_ID,
      timeMin: startTime.toISOString(),
      timeMax: endTime.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });
    
    // Vérifier dans le calendrier étudiant (si configuré)
    let studentEvents = { data: { items: [] } };
    if (STUDENT_CALENDAR_ID) {
      try {
        studentEvents = await calendar.events.list({
          calendarId: STUDENT_CALENDAR_ID,
          timeMin: startTime.toISOString(),
          timeMax: endTime.toISOString(),
          singleEvents: true,
          orderBy: 'startTime',
        });
      } catch (error) {
        console.warn('Impossible d\'accéder au calendrier étudiant:', error);
      }
    }
    
    // Vérifier les conflits
    const hasConflicts = 
      (professionalEvents.data.items && professionalEvents.data.items.length > 0) ||
      (studentEvents.data.items && studentEvents.data.items.length > 0);
    
    return !hasConflicts;
    
  } catch (error) {
    console.error('Erreur lors de la vérification de disponibilité:', error);
    return false;
  }
}

/**
 * Récupère les créneaux disponibles pour une date
 */
async function getAvailableSlots(calendar: any, date: string): Promise<string[]> {
  const allSlots = generateTimeSlots();
  const availableSlots: string[] = [];
  
  for (const slot of allSlots) {
    const isAvailable = await checkAvailability(calendar, date, slot);
    if (isAvailable) {
      availableSlots.push(slot);
    }
  }
  
  return availableSlots;
}

/**
 * Crée un événement dans Google Calendar
 */
async function createCalendarEvent(calendar: any, bookingData: BookingRequest) {
  const startTime = dayjs.tz(`${bookingData.date}T${bookingData.time}:00`, 'Europe/Paris');
  const endTime = startTime.add(MEETING_DURATION_MINUTES, 'minutes');
  
  const event = {
    summary: `Rendez-vous MH Advisory – ${bookingData.name}`,
    description: `
Rendez-vous avec ${bookingData.name}
Email: ${bookingData.email}
Raison: ${bookingData.reason}

Créé via le site MH Advisory
    `.trim(),
    start: {
      dateTime: startTime.toISOString(),
      timeZone: 'Europe/Paris',
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: 'Europe/Paris',
    },
    attendees: [
      {
        email: bookingData.email,
        displayName: bookingData.name,
      },
      {
        email: 'marc.clby.972@gmail.com',
        displayName: 'MH Advisory',
        organizer: true,
      }
    ],
    conferenceData: {
      createRequest: {
        requestId: `meeting-${Date.now()}`,
        conferenceSolutionKey: {
          type: 'hangoutsMeet'
        }
      }
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // 24h avant
        { method: 'popup', minutes: 30 },      // 30min avant
      ],
    },
    sendUpdates: 'all' as const,
  };
  
  return await calendar.events.insert({
    calendarId: PROFESSIONAL_CALENDAR_ID,
    resource: event,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
  });
}

/**
 * POST - Créer un rendez-vous
 */
export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingRequest = await request.json();
    const { name, email, reason, date, time } = bookingData;
    
    // Validation des données
    if (!name || !email || !reason || !date || !time) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }
    
    // Vérifier que la date est disponible (pas de weekend)
    if (!isDateAvailable(date)) {
      return NextResponse.json(
        { error: 'Pas de rendez-vous le weekend' },
        { status: 400 }
      );
    }
    
    // Configuration du client Google Calendar
    const auth = getAuthClient();
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Vérifier la disponibilité du créneau
    const isAvailable = await checkAvailability(calendar, date, time);
    
    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Ce créneau n\'est plus disponible' },
        { status: 409 }
      );
    }
    
    // Créer l'événement
    const response = await createCalendarEvent(calendar, bookingData);
    
    return NextResponse.json({
      success: true,
      message: 'Votre rendez-vous a été confirmé',
      eventId: response.data.id,
      meetingLink: response.data.conferenceData?.entryPoints?.[0]?.uri,
      eventDetails: {
        title: response.data.summary,
        start: response.data.start?.dateTime,
        end: response.data.end?.dateTime,
      }
    });
    
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous:', error);
    
    return NextResponse.json(
      { error: 'Erreur lors de la création du rendez-vous' },
      { status: 500 }
    );
  }
}

/**
 * GET - Récupérer les créneaux disponibles pour une date
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date requise' },
        { status: 400 }
      );
    }
    
    // Vérifier que la date est disponible (pas de weekend)
    if (!isDateAvailable(date)) {
      return NextResponse.json({
        available: false,
        message: 'Pas de rendez-vous le weekend'
      });
    }
    
    // Configuration du client Google Calendar
    const auth = getAuthClient();
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Récupérer les créneaux disponibles
    const availableSlots = await getAvailableSlots(calendar, date);
    
    return NextResponse.json({
      date: date,
      availableSlots: availableSlots,
      available: availableSlots.length > 0
    });
    
  } catch (error) {
    console.error('Erreur lors de la récupération des créneaux:', error);
    
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des créneaux' },
      { status: 500 }
    );
  }
}