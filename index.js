const Discord = require('discord.js');
const { TOKEN, PREFIX, LOCALE } = require("./util/brainly-bot.js");


const client = new Discord.Client();

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;

client.on('ready', () => {
  console.log('I am ready!');
});

/**
 * Client Events
 */
 client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "LISTENING" });
  });
  client.on("warn", (info) => console.log(info));
  client.on("error", console.error);
  
  /**
   * Import all commands
   */
  const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
  }
