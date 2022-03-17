const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.isNsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
conn.sendFile(m.chat, json.url, 'nalgas', '*NALGAS*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['nalgas']
handler.tags = ['nsfw']
handler.command = /^(nalgas|nalga)$/i

module.exports = handler
