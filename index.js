// Importer les modules nécessaires
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

// Lire la configuration depuis config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Créer une instance du client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Événement lorsque le bot est prêt
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    
    // Définir le statut en mode streaming à partir de config.json
    client.user.setPresence({
        activities: [{
            name: config.status.name,
            type: config.status.type,
            url: config.status.url
        }],
        status: 'online'
    });
});

// Connexion du bot à Discord
client.login(config.token);
