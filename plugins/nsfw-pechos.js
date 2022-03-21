const axios = require('axios')

let handler = async(m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://meme-api.herokuapp.com/gimme/boobs")
let json = res.data
conn.sendFile(m.chat, json.url, 'pechos', '*PECHOS*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['pechos']
handler.tags = ['nsfw']
handler.command = /^(pechos|pecho)$/i

module.exports = handler
