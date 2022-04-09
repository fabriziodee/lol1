let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yuri2?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'yuri', '*YURI*', m)
}

handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i

module.exports = handler
