const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='?'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login('NzI3NzgyOTg0MTA2NjM5NDcx.Xvw2uA.OR80TILruJZsnchCNr_tpDp-8u0');