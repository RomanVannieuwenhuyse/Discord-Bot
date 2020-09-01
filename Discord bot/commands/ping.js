module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(message, args){
        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
        .setTitle("PONG")
        .setDescription("pong!")
        .setColor("#00ABE7")
        .setFooter("a point for me")
        .setImage("https://lh3.googleusercontent.com/proxy/qes-XtwfjdscP6udqyhMIyEXCwOvC3CfsBi5ka2CY7H7ZvxAMC_d2aEFh6qsc5ql2ESa1V2fgyvFir9yVBtwceqh1YyJwsBE3phCPtc")

        message.channel.send(embed);
    }
}
