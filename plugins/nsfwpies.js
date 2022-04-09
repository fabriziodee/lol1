let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/foot?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'pies', '*PIES*', m)
}

handler.help = ['pies']
handler.tags = ['nsfw']
handler.command = /^(pies|patas)$/i

module.exports = handler
