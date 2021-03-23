const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "japa",
  description: "japa cama",
  execute(message) {
    const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/823699765564538940/824062525074571284/ybnbsnb8jyz21.png');
    message.channel.send(`${message.author} HORA DE JAPA`, attachment)
  }
};
