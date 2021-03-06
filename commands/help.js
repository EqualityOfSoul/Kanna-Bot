const Discord = require("discord.js");

//.help
module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("## COMMANDS ##")
    .setColor("#7ff441")
    .addField(
      "General",
      "`.info` : Shows bot and server info\n`.report <usermention>` : Allows user to report users\n`.kick <usermention> [reason]` : Allows admin to kick another user\n`.ban <usermention> [reason]` : Allows admin to ban users\n`.mute <usermention> [time s/m/h/d]` : Allows admin to mute an user for a certain period\n`.role [add/rmv] <usermention> {role-name}` : Allows admin to add or remove an user from a role"
    )
    .addField(
      "Fortnite",
      "`.fbr <epic-username> [platform pc/xbl/psn]` : Shows lifetime stats.\n`.fbr <epic-username> [platform pc/xbl/psn] {mode all/season}` : Looks up stats for solo/duo/squad or season stats.\n`.fbr drop` : Randomly picks a spot on the fortnite map"
    )
    .addField(
      "League of Legends (NA ONLY)",
      "`.lol <summoner-name>` : Shows a basic profile overview of user."
    )
    .addField(
      "Overwatch",
      "`.ow <username#battleTag> [platform pc/psn/xbl]` : Shows profile stats of user."
    )
    .addField(
      "Rocket League",
      "`.rl [platform pc/psn/xbl] <id>`  **<id>** refers to your STEAMID64, PSN Username, XboxGamerTag respectively : Shows Rocket League Stats"
    )
    .addField(
      "Crypto",
      "`.crypto` : Shows global statistics of crpytocurrencies\n`.crypto top` : Shows Top 10 crypto stats\n`.crypto <coin-name/symbol>` : Shows stats for the specific coin"
    )
    .addField(
      "Memes",
      "`.meme` : Gets a random meme from reddit\n`.meme <number 2-10>` : Gets <number> random memes from reddit"
    )
    .addField(
      "Jokes",
      "`.joke` : Gets a random joke from reddit\n`.dadjoke` : Gets a random dad joke\n`.dadjoke <number 2-10> : Gets <number> random dad jokes"
    )
    .addField(
      "Feedback",
      "`.issue` : Report an issue with the bot. Any unresponsive commands.\n`.donate` : Can keep the bot running by donating for server costs :)"
    )
    .addField(
      "Misc.",
      "`.def <term>`: Gets the definition of <term> from urbandictionary.com\n`.8ball <question?>` : Generates a 8ball response to question\n`.flip` : Flips a coin and replies HEADS or TAILS\n`.dog` : Random dog image or gif\n`.cat` : Random cat image or gif\n`.roll` : Rolls a dice"
    );
  try {
    await message.author.send(embed);
    await message.author.send(
      `**For more detailed usage of commands, visit https://kannabot.ml **`
    );
    return message.channel.send(
      `Sent all available commands in your DM's ${message.author}`
    );
  } catch (e) {
    return message.channel.send(
      `Due to the extensive features this bot provides, listing all available commands takes time. [Check list of commands](https://kannabot.ml)`
    );
  }
};

module.exports.help = {
  name: "help"
};
