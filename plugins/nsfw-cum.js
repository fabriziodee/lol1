let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/cum")
let json = res.data
conn.sendFile(m.chat, json.url, 'cum', '*CUM*', m)
}

handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i

module.exports = handler
