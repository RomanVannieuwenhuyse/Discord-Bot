module.exports = {
    name: 'pull-a-card',
    description: 'Pulls a card.',
    execute(message, args){
        const Discord = require('discord.js');
        var randomNumber;

        var cardNumber;
        if(!args[1]){
          cardsLength = cards.length + 1;
          if(cardsLength <= 1){
            embed("I don't have a card yet.", "NaC");
            return;
          }
          while (!cards[randomNumber]){
            randomNumber = Math.floor(Math.random(0,1)*cardsLength);
          }
          embed(cards[randomNumber], "random", randomNumber + 1);
          message.delete();
        } else if(isInt(parseInt(args[1]))){
          if(cards[parseInt(args[1]) - 1]){
            embed(cards[parseInt(args[1]) - 1], "chosen", parseInt(args[1]));
            message.delete();
          } else {
            //"NaC stands for not a card"
            //*long silence*
            //"It's a Joke!"
            //*awkward laughing*
            embed("I don't have this many cards yet.", "NaC");
          }
        } else {
          embed("Please provide a valid command.", "NaC")
        }

        function embed(description, card, cardnumber){
          const embed = new Discord.MessageEmbed()
          .setDescription(description)
          .setColor("#29BB9C")
          if(card === "random"){
            embed.setTitle("Random card: card #" + cardnumber)
            embed.setFooter("requested by " + message.member.user.username)
            embed.setTimestamp();
          } else if (card === "chosen"){
            embed.setTitle("Card #" + cardnumber)
            embed.setFooter("requested by " + message.member.user.username)
            embed.setTimestamp();
          }
          message.channel.send(embed);
        }

        function isInt(value) {
          return !isNaN(value) &&
          parseInt(Number(value)) == value &&
          !isNaN(parseInt(value, 10));
        }
    }
}
