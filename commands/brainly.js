const { BrainlyAPI, Server } = require('brainly-api');

module.exports = {
    name: "brainly",
    description: "brainly",
    async execute(message) {
      const { question } = message.member;

      BrainlyAPI.startWorker({ experimental: true, server: Server.PT }, async brainly => {
        const resp = await brainly.findQuestion({question});
      });
        try {
          https.get(url, function (res) {
            if (res.statusCode == "302") {
              return message.client.commands.get("brainly").execute(message, [res.headers.location]);
            } else {
              return message.reply("No content could be found at that url.").catch(console.error);
            }
          });
        } catch (error) {
          console.error(error);
          return message.reply(error.message).catch(console.error);
        }
    }
  };