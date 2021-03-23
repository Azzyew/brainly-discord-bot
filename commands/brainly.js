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
          const htmlAnswer = resp.raw[0].data.questionSearch.edges[0].node.answers.nodes[0].content;
          const answer = htmlAnswer.replace( /(<([^>]+)>)/ig, '');
          const htmlQ = resp.raw[0].data.questionSearch.edges[0].node.content;
          const q = htmlQ.replace( /(<([^>]+)>)/ig, '');

          message.channel.send('**Questão:** \n');
          message.channel.send(q);
          message.channel.send('**Resposta:** \n');
          message.channel.send(answer);
        });
      } else {
        message.channel.send('Ops! Não consegui achar nada...');
      }

    }
  };