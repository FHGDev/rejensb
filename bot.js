const discord = require('discord.js')
const bot = new discord.Client()
bot.login(process.env.rtoken)

bot.on('ready', () => {
  bot.user.setGame(`Fallout 4`)
  console.log("Bot ready.")
})
