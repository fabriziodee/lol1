let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://api.waifu.pics/nsfw/waifu")
let json = res.data
conn.sendFile(m.chat, json.url, 'hwaifu', '*WAIFU*', m)
}

handler.help = ['hwaifu']
handler.tags = ['nsfw']
handler.command = /^(hwaifu)$/i

module.exports = handler
