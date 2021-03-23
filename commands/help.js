module.exports = {
	name: 'help',
	description: 'comandos',
	execute(message) {
		message.channel.send(`
    !! COMANDOS !! \n
    ?help - Mostra todos os comandos \n
    ?vtnc - Manda o biroliro tomar no c* \n
    ?fofoca - pergunta pro Fábio qual a fofoca do dia \n
    ?mimir - Responde com a foto de um travesseiro \n
    ?brainly <pergunta> - Pesquisa uma questão no Brainly (não funciona ainda)`);
	},
};
