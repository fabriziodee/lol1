const axios = require('axios')

let handler = async(m, { conn }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/pussy')
conn.sendFile(m.chat, `${porn.data.url}`, 'cuca', `*${porn.data.title}*`, m)
}

handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(concha|vajina|cuca|pussy)$/i

module.exports = handler
