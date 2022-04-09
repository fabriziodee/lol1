let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://api.waifu.pics/nsfw/neko")
let json = res.data
conn.sendFile(m.chat, json.url, 'hneko', '*NEKO*', m)
}

handler.help = ['hneko']
handler.tags = ['nsfw']
handler.command = /^(hneko)$/i

module.exports = handler
