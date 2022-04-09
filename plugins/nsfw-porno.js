const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
conn.sendFile(m.chat, json.url, 'porno', '*PORNO*', m)
}

handler.help = ['porno']
handler.tags = ['nsfw']
handler.command = /^(porno)$/i

module.exports = handler
