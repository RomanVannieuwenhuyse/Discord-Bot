const Discord = require('discord.js');

var messageCounter = 0;

const client = new Discord.Client();

const prefix = "!";

const token = "NzQ4NTA3NzM3Mjc2Njc4MjA1.X0ecJw.a7raof3tgoBYzS4EfPJQm5slfVw";

const fs = require("fs");

global.cards = new Array();

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
  messageCounter = messageCounter + 1;
  if(messageCounter >= 10){
    var randomNumber;
    cardsLength = cards.length + 1;
    if(cards.length <= 0) return;
    while (!cards[randomNumber]){
      randomNumber = Math.floor(Math.random(0,1)*cardsLength);
    }
    var cardnumber = randomNumber + 1;
    const embed = new Discord.MessageEmbed()
    .setDescription(cards[randomNumber])
    .setColor("#29BB9C")
    .setTitle("Random card: card #" + cardnumber)
    .setFooter("requested by me :)")
    .setTimestamp();
    message.channel.send(embed)
    messageCounter = 0;

  }

/*  let role1 = message.guild.roles.cache.get("&716682569831415870");
  let role2 = message.guild.roles.cache.get("&716683852818546718");
  let role3 = message.guild.roles.cache.get("&735937957583650907");
  let role4 = message.guild.roles.cache.get("&716684113079435305");
  let role5 = message.guild.roles.cache.get("&728991043436937258");
  let role6 = message.guild.roles.cache.get("&749304899946151936");*/
  if(message.author.bot) return;
  if(message.content.toLowerCase().includes("je moeder")){
    embed("je moeder is een plopkoek");
  }
  if(message.content.toLowerCase().includes("spits") || message.content.toLowerCase().includes("_spits_") || message.content.toLowerCase().includes("spuug") || message.content.toLowerCase().includes("spugen") || message.content.toLowerCase().includes("lik") || message.content.toLowerCase().includes("likken") || message.content.toLowerCase().includes("lama")){
    embed("agressivly spits back");
  }
  if(message.content.toLowerCase().includes("plop") || message.content.toLowerCase().includes("plopperdeploppperdeplop")){
    embed("Wil jij een glaasje plopmelk?");
  }

  if(message.content.toLowerCase().includes("duif") || message.content.toLowerCase().includes("koeren") || message.content.toLowerCase().includes("duive")){
    embed("roekoekoe")
  }
  if(message.content.toLowerCase().includes("patat")){
    embed("Heilige patat... \n amen")
  }
  if(message.content.toLowerCase().includes("aardappel")){
    embed("Durf dat niet meer te doen");
/*    message.guild.member.cache.remove(role2);
    message.guild.member.cache.remove(role3);
    message.guild.member.cache.remove(role4);
    message.guild.member.cache.remove(role5);
    message.guild.member.cache.remove(role6);*/
  }
  if(!message.content.startsWith(prefix)) return;

  let args = message.content.substring(prefix.length).split(" ");

  switch(args[0]){
      case "ping":
        client.commands.get('ping').execute(message, args);
      break;
      case "create-a-card":
        client.commands.get('create-a-card').execute(message, args);
      break;
      case "pull-a-card":
        client.commands.get('pull-a-card').execute(message, args);
      break;
  }

  function embed(description){
    const embed = new Discord.MessageEmbed()
    .setDescription(description)
    .setColor("#29BB9C");
    message.channel.send(embed);
  }
})

client.login(token);
