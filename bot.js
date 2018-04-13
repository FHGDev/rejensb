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
    if (message.content.startsWith("!changestatus")) {
      console.log("REJEN and/or Hulk used a cmd.")
      let game = args.join(" ")
      let ar = ["WATCHING", "PLAYING", "LISTENING", "STREAMING"]
      bot.user.setActivity(game, {type: ar[Math.floor(Math.random() * ar.length)]})
    }
  } else {
    return;
  }
})
