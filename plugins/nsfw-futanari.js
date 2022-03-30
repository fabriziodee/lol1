let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/cum")
let json = res.data
conn.sendFile(m.chat, json.url, 'futanari', '*FUTANARI*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['futanari']
handler.tags = ['nsfw']
handler.command = /^(futanari)$/i
handler.limit = true

module.exports = handler
