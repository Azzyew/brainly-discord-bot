const { MessageAttachment } = require('discord.js');
const app = require('../util/app.json');

module.exports = {
  name: "mimir",
  description: app.__('mimir.description'),
  execute(message) {
    const attachment = new MessageAttachment('https://ae01.alicdn.com/kf/HTB1H_voLpXXXXalXXXXq6xXFXXXL/Cute-Baby-Pillow-Cartoon-comfort-sleeping-shaping-pillow-baby-pillows-nursing-pillow-Free-Shipping.jpg');
    return message.member
      .send(`${message.author},`, attachment)
      .catch(console.error);
  }
};
