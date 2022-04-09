let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/solo")
let json = res.data
conn.sendFile(m.chat, json.url, 'solo', '*SOLO*', m)
}

handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i

module.exports = handler
