const { Client, MessageAttachment } = require('discord.js');

client.on('message', message => {
  if (message.content === '?mimir') {
    const attachment = new MessageAttachment('https://ae01.alicdn.com/kf/HTB1H_voLpXXXXalXXXXq6xXFXXXL/Cute-Baby-Pillow-Cartoon-comfort-sleeping-shaping-pillow-baby-pillows-nursing-pillow-Free-Shipping.jpg');
    message.channel.send(`${message.author},`, attachment);
  }
});
