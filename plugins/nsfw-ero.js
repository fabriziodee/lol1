let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'ero', '*ERO*', m)
}

handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero|nsfwero)$/i

module.exports = handler
