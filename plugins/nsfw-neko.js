let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://api.waifu.pics/nsfw/neko")
let json = res.data
conn.sendFile(m.chat, json.url, 'hneko', '*NEKO*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['hneko']
handler.tags = ['nsfw']
handler.command = /^(hneko)$/i
handler.limit = true

module.exports = handler
