module.exports = {
    name: 'create-a-card',
    description: 'Creates a card',
    execute(message, args){
      const Discord = require('discord.js');

      if(!args[1]){
        embed("I need something to put on the card...", false);
        return;
      };
      newCard = message.content.substring(14);

      var lowerCase = newCard.toLowerCase();

      for(var i = 0; i<cards.length; i++){
        if(lowerCase == cards[i].toLowerCase()){
          var cardNumber = i+1;
          embed("This card already exists, it's card #" + cardNumber, false);
          return;
        }
      }

      cards.push(newCard);

      embed(newCard, true);

      message.delete();

      function embed(description, card){
        const embed = new Discord.MessageEmbed()
        .setDescription(description)
        .setColor("#29BB9C")
        if(card === true){
          var cardNumber = cards.length;
          embed.setTitle("Card #" + cardNumber)
          embed.setFooter("created by " + message.member.user.username)
          embed.setTimestamp();
        }
        message.channel.send(embed);
      }

    }

}
