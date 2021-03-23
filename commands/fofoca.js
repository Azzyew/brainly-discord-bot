const fs = require('fs');

function app() {
fs.readFile('../util/app.json', (err, data) => {
  return data;
});
}

module.exports = {
  name: "fofoca",
  description: app('fofoca.description'),
  execute(message) {
    return message.channel
      .send(
        `@Fabio202 qual a fofoca do dia?`
      )
      .catch(console.error);
  }
};
