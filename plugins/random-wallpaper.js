const axios = require('axios')

let handler = async(m, { conn }) => {
conn.reply(m.chat, wait, m)
let les = await axios.get('https://meme-api.herokuapp.com/gimme/wallpaper')
conn.sendFile(m.chat, les.data.url, 'wallpaper', `*${les.data.title}*`, m)
}

handler.help = ['wallpaper']
handler.tags = ['random']
handler.command = /^(randomwallpaper|wallpaper|randomwall)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
