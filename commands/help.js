module.exports = {
	name: 'help',
	description: 'comandos',
	execute(message) {
		message.channel.send(`
    !! COMANDOS !! \n
    ?help - Mostra todos os comandos \n
    ?b <pergunta> - Pesquisa uma questão no Brainly \n
    ?c <conta> - Calcula uma expressão matemática usando MathJS. Raiz quadrada é sqrt, ex: (sqrt4) e ângulo é deg, ex: (45deg) \n
    ?vtnc - Manda o biroliro tomar no c* \n
    ?fofoca - pergunta pro Fábio qual a fofoca do dia \n
    ?mimir - A mimir \n
    ?japa - Japa cama \n
    ?elogio - Gera elogio aleatório ou marca alguém`);
	}
};
