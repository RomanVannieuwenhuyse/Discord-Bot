const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

const token = "NzQ4NTA3NzM3Mjc2Njc4MjA1.X0ecJw.OzsmoyAQl0ku16oKaF8wwydwinw";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandfiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandfiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('This bot is online!');
})

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch(command){
      case "ping":
        client.commands.get('ping').execute(message, args);
      break;
      case "je":
        message.channel.send("moeder is een plopkoek");
      break;
      case "spits":
      case "_spits_":
        message.channel.send("agressivly spits back");
      break;
      case "plop":
      case "plopperdeplopperdeplop":
        message.channel.send("Wil jij een glaasje plopmelk?");
      break;
      case "pull-a-card":
          client.commands.get('pull-a-card').execute(message, args);
      break;
  }
})

client.login(token);
