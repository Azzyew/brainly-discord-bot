const { create, all } = require ('mathjs');
const math = create(all);

module.exports = {
    name: "c",
    description: "calc",
    async execute(message) {
      if(message.content[0] === '?' && message.content[1] === 'c') {
        let expr = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
          const result = math.evaluate(expr);

          message.channel.send('**Resposta:** \n');
          message.channel.send(result);
      } else {
        message.channel.send('Ops! Não consegui entender o comando...');
      }

    }
  };