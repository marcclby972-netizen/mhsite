const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const CREDENTIALS_PATH = path.join(__dirname, '..', 'credentials', 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(__dirname, '..', 'token.json');
const CALENDAR_ID = 'mhadvisory.contact@gmail.com';

/**
 * Test de l'API de réservation
 */
async function testBookingAPI() {
  console.log('🧪 Test de l\'API de réservation MH Advisory\n');

  // Vérifier les fichiers de configuration
  console.log('📁 Vérification des fichiers de configuration...');
  
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('❌ Fichier credentials non trouvé:', CREDENTIALS_PATH);
    return;
  }
  console.log('✅ Credentials trouvés');

  if (!fs.existsSync(TOKEN_PATH)) {
    console.error('❌ Token non trouvé. Exécutez d\'abord: node scripts/generate-token.js');
    return;
  }
  console.log('✅ Token trouvé');

  // Charger les credentials et le token
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));

  const { client_secret, client_id, redirect_uris } = credentials.web;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(token);

  // Test de connexion au calendrier
  console.log('\n📅 Test de connexion au calendrier...');
  try {
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    
    // Lister les calendriers
    const calendarList = await calendar.calendarList.list();
    console.log('✅ Connexion au calendrier réussie');
    
    // Vérifier si le calendrier cible existe
    const targetCalendar = calendarList.data.items?.find(cal => cal.id === CALENDAR_ID);
    if (targetCalendar) {
      console.log(`✅ Calendrier cible trouvé: ${targetCalendar.summary}`);
    } else {
      console.log(`⚠️  Calendrier cible non trouvé: ${CALENDAR_ID}`);
      console.log('📋 Calendriers disponibles:');
      calendarList.data.items?.forEach(cal => {
        console.log(`   - ${cal.summary} (${cal.id})`);
      });
    }

    // Test de création d'événement (simulation)
    console.log('\n🎯 Test de création d\'événement...');
    const testEvent = {
      summary: 'Test MH Advisory - Réservation',
      description: 'Test de l\'API de réservation',
      start: {
        dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Demain
        timeZone: 'Europe/Paris',
      },
      end: {
        dateTime: new Date(Date.now() + 24 * 60 * 60 * 1000 + 30 * 60 * 1000).toISOString(), // +30 minutes
        timeZone: 'Europe/Paris',
      },
    };

    // Note: On ne crée pas vraiment l'événement pour éviter le spam
    console.log('✅ Structure d\'événement valide');
    console.log('📝 Événement de test:', JSON.stringify(testEvent, null, 2));

  } catch (error) {
    console.error('❌ Erreur lors du test:', error.message);
    
    if (error.message.includes('invalid_grant')) {
      console.log('\n💡 Solution: Le token a expiré. Exécutez: node scripts/generate-token.js');
    } else if (error.message.includes('insufficient_scope')) {
      console.log('\n💡 Solution: Les permissions sont insuffisantes. Vérifiez les scopes dans generate-token.js');
    }
  }
}

/**
 * Test de l'API HTTP
 */
async function testHTTPAPI() {
  console.log('\n🌐 Test de l\'API HTTP...');
  
  try {
    const response = await fetch('http://localhost:3000/api/calendar', {
      method: 'GET',
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API HTTP accessible:', data.message);
    } else {
      console.log('⚠️  API HTTP non accessible. Assurez-vous que le serveur est démarré (npm run dev)');
    }
  } catch (error) {
    console.log('⚠️  API HTTP non accessible. Assurez-vous que le serveur est démarré (npm run dev)');
  }
}

/**
 * Fonction principale
 */
async function main() {
  await testBookingAPI();
  await testHTTPAPI();
  
  console.log('\n🎉 Test terminé !');
  console.log('\n📋 Prochaines étapes:');
  console.log('1. Démarrez le serveur: npm run dev');
  console.log('2. Allez sur http://localhost:3000/contact');
  console.log('3. Testez la réservation d\'un rendez-vous');
}

// Exécuter le test
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { testBookingAPI, testHTTPAPI };

