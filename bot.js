const discord = require('discord.js')
const bot = new discord.Client()
const idarray = ["369313004539346945", "242734840829575169"]
bot.login(process.env.rtoken)
let result = Math.random() * 2
const prefix = "!"

bot.on('ready', () => {
  bot.user.setActivity(`Fallout 4`, {type: "PLAYING"})
  console.log("Bot ready.")
})

bot.on('message', message => {
  let mArray = message.content.split(" ");
  let args = mArray.slice(1)
  if (message.author.bot) return;
  if (idarray.includes(message.author.id)) {
    if (message.content.startsWith("!setplaying")) {
      console.log("REJEN and/or Hulk used a cmd.")
      let game = args.join(" ")

      bot.user.setActivity(game, {type: "PLAYING"})
    } if (message.content.startsWith("!setwatching")) {
      let watching = args.join(' ');
      bot.user.setActivity(watching, {type: "WATCHING"})
    } if (message.content.startsWith("!setlistening")) {
      let listening = args.join(' ');
      bot.user.setActivity(listening, {type: "LISTENING"})
    } if (message.content.startsWith("!setstreaming")) {
      let streaming = args.join(' ');
      bot.user.setActivity(streaming, {type: "STREAMING})
    } if (message.content == "!ping") {
        message.channel.send(`Bot Ping: ${bot.ping}ms.`)
      }
  } else {
    return;
  }
})
