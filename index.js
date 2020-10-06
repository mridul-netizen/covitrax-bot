const Telegraf = require('telegraf');
const axios = require('axios')

const bot = new Telegraf('1115309266:AAFICbWkExhgZY-kQHN3y4Iye8vsIqUnzj8')

// bot.use((ctx) => {
//     ctx.reply("Hii Human!!")
// })

// bot.use(async (ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     ctx.reply("hi human!!")
//     console.log('Response time: %sms', ms)
//   })
  
//   bot.on('text', (ctx) => ctx.reply('Hello World'))


bot.start((ctx) => {
    ctx.reply("Welcome to Covitrax-Bot:\nSelect any of the follwoing commands to know more about covid\n-/start\n-/help\n-/search for graphs\n-/state wise census\n-/country wise census\n-/daily news\n-/start\n-/contact\n-/website\n-/creators\n-/github repo\n-/contribute\n",);
})

bot.help((ctx) => {
    ctx.reply("Welcome to Covitrax-Bot:\nSelect any of the follwoing commands to know more about covid\n-/start\n-/help\n-/search for graphs\n-/state wise census\n-/country wise census\n-/daily news\n-/start\n-/contact\n-/website\n-/creators\n-/github repo\n-/contribute\n")
})

bot.on('sticker',(ctx) => {
    ctx.reply("Cool Sticker")
})
bot.hears('hello',(ctx) => {
    ctx.reply('Hello Sir')
})
bot.hears('Hello',(ctx) => {
    ctx.reply('Hello Sir')
})
bot.command('say',(ctx) => {
    msg = ctx.message.text
    // splits string into an array and then removes shift
    msgArray = msg.split(' ')
    msgArray.shift()  
    newMsg = msgArray.join(' ')
    ctx.reply(newMsg)
})

bot.command('fortune',(ctx => {
    url = "http://yerkee.com/api/fortune"  //using axios library

    axios.get(url)
    .then((res) => {
        ctx.reply(res.data.fortune)
    })
}))

bot.launch()