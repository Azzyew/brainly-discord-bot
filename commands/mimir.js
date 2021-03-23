const { MessageAttachment } = require('discord.js');

module.exports = {
  name: "mimir",
  description: "mimir.description",
  execute(message) {
    const attachment = new MessageAttachment('https://ae01.alicdn.com/kf/HTB1H_voLpXXXXalXXXXq6xXFXXXL/Cute-Baby-Pillow-Cartoon-comfort-sleeping-shaping-pillow-baby-pillows-nursing-pillow-Free-Shipping.jpg');
    message.channel.send(`${message.author},`, attachment)
  }
};
