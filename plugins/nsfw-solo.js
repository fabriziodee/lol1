let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/solo")
let json = res.data
conn.sendFile(m.chat, json.url, 'solo', '*SOLO*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i

module.exports = handler
