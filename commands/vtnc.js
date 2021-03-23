const fs = require('fs');

function app() {
fs.readFile('../util/app.json', (err, data) => {
  return data;
});
}

module.exports = {
  name: "vtnc",
  description: app('vtnc.description'),
  execute(message) {
    return message.channel
      .send(
        `VAI TOMAR NO CU, BOLSONARO!`
      )
      .catch(console.error);
  }
};