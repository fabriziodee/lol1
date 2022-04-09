let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/panties")
let json = res.data
conn.sendFile(m.chat, json.url, 'panties', '*PANTIES*', m)
}

handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^(panties)$/i

module.exports = handler
