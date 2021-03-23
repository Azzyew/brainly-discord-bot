  
module.exports = async ({ client, Constants: { Colors, Text, WorkerTypes, WorkerCommands: { MATHJS: MathJS } } }, documents, msg, commandData) => {
	if (msg.suffix) {
		let args = msg.suffix.split(/\s+/);
		if (args[0].trim().toLowerCase() === "help") {
			try {
				args.shift();
				args = args.join(" ");
				const helpstr = await client.workerManager.getValueFromWorker(WorkerTypes.MATH, { command: MathJS.HELP, data: args });
				msg.send({
					embed: {
						color: Colors.INFO,
						description: `\`\`\`css\n${helpstr}\`\`\``,
					},
				});
			} catch (err) {
				const description = [
					`Couldn't find any help message for \`${args}\`!`,
					"",
					"We use **[MathJS](http://mathjs.org/)** to calculate your equations.",
				].join("\n");
				msg.send({
					embed: {
						color: Colors.SOFT_ERR,
						description,
						footer: {
							text: `Make sure you typed it right!`,
						},
					},
				});
			}
		} else {
			await msg.send({
				embed: {
					color: Colors.INFO,
					title: `⌛ Calculando...`,
					description: `Espera um minutinho que já vem!`,
				},
			});
			try {
				const res = await client.workerManager.getValueFromWorker(WorkerTypes.MATH, { command: MathJS.EVAL, data: msg.suffix.trim() });
				msg.send({
					embed: {
						color: Colors.RESPONSE,
						title: `Aqui está o resultado!`,
						author: {
							name: `Resultados adquiridos usando MathJS`,
							url: `http://mathjs.org/`,
						},
						description: `\`\`\`css\n${res}\`\`\``,
					},
				});
			} catch (err) {
				msg.send({
					embed: {
						color: Colors.ERR,
						title: Text.ERROR_TITLE(),
						description: Text.ERROR_BODY("calc", err),
						footer: {
							text: `Sinto muito :(`,
						},
					},
				});
			}
		}
	} else {
		msg.sendInvalidUsage(commandData, "O que você quer calcular? 🤓");
	}
};