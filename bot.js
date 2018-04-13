const discord = require('discord.js')
const bot = new discord.Client()
const idarray = ["369313004539346945", "242734840829575169"]
bot.login(process.env.rtoken)

bot.on('ready', () => {
  bot.user.setActivity(`Fallout 4`, {type: "PLAYING"})
  console.log("Bot ready.")
})

bot.on('message', message => {
  let args = message.content.split(" ").slice(1)
  if (message.author.bot) return;
  if (idarray.includes(message.author.id)) {
    if (message.content.startsWith("!changestatus")) {
      console.log("REJEN used a cmd.")
      bot.user.setActivity(args.join(' '), {type: "PLAYING"})
    }
  } else {
    return;
  }
})
