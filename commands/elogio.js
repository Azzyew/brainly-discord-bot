const listaElogios = require('../util/elogios.json');

module.exports = {
	name: 'elogio',
	description: 'elogio aleatório',
	execute(message) {
        const random = listaElogios.elogios[Math.floor(Math.random() * listaElogios.elogios.length)];
		message.channel.send(`${message.author}: ` + random);
	},
};