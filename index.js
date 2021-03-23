const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const {join} = require('path')

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const client = new Client();

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`os corno da INFO`, { type: "LISTENING" }
  );
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

client.on('message', msg => {
  if (msg.content === '?vtnc') {
  msg.send('VAI TOMAR NO CU, BOLSONARO');
  }
  });

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

})