let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/feet")
let json = res.data
conn.sendFile(m.chat, json.url, 'feed', '*FEED*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['feed']
handler.tags = ['nsfw']
handler.command = /^(feed)$/i
handler.limit = true

module.exports = handler
