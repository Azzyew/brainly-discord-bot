const { MessageEmbed } = require("discord.js");
const app = require('../util/app.json');

// const fs = require("fs");
// fs.readFile("../util/app.json", (err, data) => {
//     if (err) throw err;
//     let app = JSON.parse(data);
//     console.log(app);
// });

module.exports = {
    name: "help",
    aliases: ["h"],
    description: app._("help.description"),
    execute(message) {
      let commands = message.client.commands.array();
  
      let helpEmbed = new MessageEmbed()
        .setTitle(app.__mf("help.embedTitle", { botname: message.client.user.username }))
        .setDescription(app.__("help.embedDescription"))
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