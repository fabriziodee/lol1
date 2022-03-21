const axios = require('axios')

let handler = async(m, { conn }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.isNsfw == true) {
conn.reply(m.chat, wait, m)
let les = await axios.get('https://meme-api.herokuapp.com/gimme/yaoi')
conn.sendFile(m.chat, les.data.url, 'yaoi', `*YAOI*`, m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i
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
