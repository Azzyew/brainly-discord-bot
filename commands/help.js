const { MessageEmbed } = require("discord.js");
const fs = require('fs');

function app() {
fs.readFile('../util/app.json', (err, data) => {
  return data;
});
}

module.exports = {
    name: "help",
    aliases: ["h"],
    description: app("help.description"),
    execute(message) {
      let commands = message.client.commands.array();
  
      let helpEmbed = new MessageEmbed()
        .setTitle(app("help.embedTitle", { botname: message.client.user.username }))
        .setDescription(app("help.embedDescription"))
        .setColor("#9370DB");
  
      commands.forEach((cmd) => {
        helpEmbed.addField(
          `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
          `${cmd.description}`,
          true
        );
      });
  
      helpEmbed.setTimestamp();
  
      return message.channel.send(helpEmbed).catch(console.error);
    }
  };