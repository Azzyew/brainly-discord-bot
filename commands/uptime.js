const app = require('../util/app.json');

module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: app.__('uptime.description'),
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(app.__mf('uptime.result', {days: days, hours: hours, minutes: minutes, seconds: seconds}))
      .catch(console.error);
  }
};