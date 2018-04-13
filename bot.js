const discord = require('discord.js')
const bot = new discord.Client()
bot.login(process.env.rtoken)

bot.on('ready', () => {
  bot.user.setActivity(`Fallout 4`, {type: "PLAYING"})
  console.log("Bot ready.")
})
