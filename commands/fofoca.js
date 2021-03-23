const app = require('../util/app.json');

module.exports = {
  name: "fofoca",
  description: app.__('fofoca.description'),
  execute(message) {
    return message.channel
      .send(
        `@Fabio202 qual a fofoca do dia?`
      )
      .catch(console.error);
  }
};