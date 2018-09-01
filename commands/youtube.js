const Discord = require("discord.js");
const search = require('youtube-search');
const config = require('../config.json');

//.yt <search> - Searches youtube for <search>
module.exports.run = async (bot, message, args) => {
  if (!args[0])
    return message.channel.send("Error. Make sure you specify a search term. `.yt [search]`");

  let searchTerm = args[0];

  var opts = {
    maxResults: 10,
    key: config.ytApi
  };

  // // Await !vote messages
  // const filter = m => m.content.startsWith('!vote');
  // // Errors: ['time'] treats ending because of the time limit as an error
  // channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
  //   .then(collected => console.log(collected.size))
  //   .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));

  search(searchTerm, opts, function (err, results) {
    if (err) return console.log(err);
    let title = {
      top1: results[0].title,
      top2: results[1].title,
      top3: results[2].title,
      top4: results[3].title,
      top5: results[4].title
    }
    let embed = new Discord.RichEmbed()
      .setTitle("## TOP 5 YOUTUBE RESULTS ##")
      .setDescription("Use `.yt [number]` to choose the video you want")
      .setColor("#f44e42")
      .addField("Results:", `**1.${title.top1}\n2.${title.top2}\n3.${title.top3}\n4.${title.top4}\n5.${title.top5}**`);

    message.channel.send(embed);
    let filter = m => m.content.startsWith('1', '2', '3', '4', '5');
    message.channel.awaitMessages(filter, { max: 1 }).then(collected => console.log(collected.size))
    // console.log(results);
  });
};

module.exports.help = {
  name: "yt"
};
