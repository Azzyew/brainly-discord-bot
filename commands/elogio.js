const listaElogios = require('../util/elogios.json');

module.exports = {
	name: 'elogio',
	description: 'elogio aleatório',
	execute(message) {
        const random = listaElogios.elogios[Math.floor(Math.random() * listaElogios.elogios.length)];
		const person = message.content.substring(message.content.indexOf(" "), message.content.length);

		console.log(message.content);
		if (message.content === "?elogio") {
			message.channel.send(`${message.author}: ` + random);
		} else {
			message.channel.send(`${person} você é ` + random);

		}
	},
};