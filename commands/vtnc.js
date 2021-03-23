const app = require('../util/app.json');

module.exports = {
  name: "vtnc",
  description: app.__('vtnc.description'),
  execute(message) {
    return message.channel
      .send(
        `VAI TOMAR NO CU, BOLSONARO!`
      )
      .catch(console.error);
  }
};