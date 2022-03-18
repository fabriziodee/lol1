const axios = require('axios')

let handler = async(m, { conn }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.isNsfw) {
conn.reply(m.chat, wait, m)
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/pussy')
conn.sendFile(m.chat, `${porn.data.url}`, 'cuca', `*${porn.data.title}*`, m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['cuca']
handler.tags = ['nsfw']
handler.command = /^(concha|vajina|cuca|pussy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false

module.exports = handler
