const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus("online");
    console.log('Cherrii Bot is now ready!');
});

client.on('message', message => {
  input = message.content.toLowerCase();
  // These are questions asked to Cherrii, by addressing his name first.
    if (input.startsWith("cherrii ")) {
      // *** Ping ***
      if ((input === 'cherrii ping') && (responses < responseMax)) {
        message.reply("Pong! :D");
        responses++;
      }
    }
});

client.login(process.env.BOT_TOKEN);
