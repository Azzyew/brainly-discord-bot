const { BrainlyAPI, Server } = require('brainly-api');

module.exports = {
    name: "b",
    description: "brainly",
    async execute(message) {
      if(message.content[0] === '?' && message.content[1] === 'b') {
        let question = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
        console.log(question);
        BrainlyAPI.startWorker({ experimental: true, server: Server.PT }, async brainly => {
          const resp = await brainly.findQuestion(question);
          
          message.channel.send('**Questão:** \n');
          message.channel.send(resp.raw[0].data.questionSearch.edges[0].node.content);
          message.channel.send('**Resposta:** \n');
          message.channel.send(resp.raw[0].data.questionSearch.edges[0].node.answers.nodes[0].content);
        });
      } else {
        message.channel.send('Ops! Não consegui achar nada...');
      }

    }
  };