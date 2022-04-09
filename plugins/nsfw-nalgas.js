const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
let chat = global.DATABASE.data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
conn.sendFile(m.chat, json.url, 'nalgas', '*NALGAS*', m)
}

handler.help = ['nalgas']
handler.tags = ['nsfw']
handler.command = /^(nalgas|nalga)$/i

module.exports = handler
