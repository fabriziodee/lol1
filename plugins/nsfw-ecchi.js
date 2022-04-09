const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) return nsfw
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/ecchi")
let json = res.data
conn.sendFile(m.chat, json.url, 'ecchi', '*ECCHI*', m)
}

handler.help = ['ecchi']
handler.tags = ['nsfw']
handler.command = /^(ecchi)$/i

module.exports = handler
