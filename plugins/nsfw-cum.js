let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'cum', '*CUM*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.limit = true

module.exports = handler
