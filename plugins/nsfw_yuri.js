let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.isNsfw) {
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yuri2?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'cum', '*CUM*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i

module.exports = handler
