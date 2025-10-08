const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Chemins des fichiers
const CREDENTIALS_PATH = path.join(__dirname, '..', 'client_secret_859505628661-0lld7ub2137hc2f3vpt335evpf547fct.apps.googleusercontent.com.json');
const TOKEN_PATH = path.join(__dirname, '..', 'token.json');

/**
 * Test de connexion Google Calendar
 */
async function testCalendarConnection() {
  try {
    console.log('🧪 Test de connexion Google Calendar...\n');

    // Charger les credentials
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.error('❌ Fichier client_secret non trouvé:', CREDENTIALS_PATH);
      return false;
    }
    console.log('✅ Fichier client_secret trouvé');

    // Charger le token
    if (!fs.existsSync(TOKEN_PATH)) {
      console.error('❌ Fichier token.json non trouvé. Exécutez d\'abord: node scripts/generate-token.js');
      return false;
    }
    console.log('✅ Fichier token.json trouvé');

    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));

    // Configurer le client OAuth2
    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    oAuth2Client.setCredentials(token);

    // Tester la connexion
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    
    console.log('\n📅 Test de récupération des calendriers...');
    const response = await calendar.calendarList.list();
    
    console.log('\n✅ Connexion réussie!');
    console.log('\n📋 Calendriers disponibles:');
    response.data.items.forEach((cal, index) => {
      console.log(`${index + 1}. ${cal.summary} (${cal.id})`);
      if (cal.primary) {
        console.log('   ⭐ Calendrier principal');
      }
    });

    // Test de récupération des événements du jour
    console.log('\n📅 Test de récupération des événements...');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const events = await calendar.events.list({
      calendarId: 'primary',
      timeMin: today.toISOString(),
      timeMax: tomorrow.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    console.log(`✅ ${events.data.items.length} événement(s) trouvé(s) pour aujourd'hui`);

    if (events.data.items.length > 0) {
      console.log('\n📝 Événements:');
      events.data.items.forEach((event, index) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${index + 1}. ${event.summary || 'Sans titre'} - ${start}`);
      });
    }

    console.log('\n🎉 Test de connexion réussi!');
    console.log('💡 Vous pouvez maintenant utiliser l\'API de réservation sur votre site.');
    
    return true;

  } catch (error) {
    console.error('\n❌ Erreur lors du test:', error.message);
    
    if (error.message.includes('invalid_grant')) {
      console.log('\n💡 Le token semble expiré. Exécutez: node scripts/generate-token.js');
    }
    
    return false;
  }
}

// Exécuter le test
if (require.main === module) {
  testCalendarConnection().catch(console.error);
}

module.exports = { testCalendarConnection };
