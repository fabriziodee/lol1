let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/feet")
let json = res.data
conn.sendFile(m.chat, json.url, 'feed', '*FEED*', m)
}

handler.help = ['feed']
handler.tags = ['nsfw']
handler.command = /^(feed)$/i

module.exports = handler
