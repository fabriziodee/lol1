let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'bdsm', '*BDSM*', m)
}

handler.help = ['bdsm']
handler.tags = ['nsfw']
handler.command = /^(bdsm|nsfwbdsm)$/i

module.exports = handler
