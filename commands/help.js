module.exports = {
	name: 'help',
	description: 'comandos',
	execute(message) {
		message.channel.send(`
    !! COMANDOS !! \n
    ?help - Mostra todos os comandos \n
    ?b <pergunta> - Pesquisa uma questão no Brainly \n
    ?vtnc - Manda o biroliro tomar no c* \n
    ?fofoca - pergunta pro Fábio qual a fofoca do dia \n
    ?mimir - A mimir \n
    ?japa - Japa cama`);
	},
};
