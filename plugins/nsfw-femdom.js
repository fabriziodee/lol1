let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'femdom', '*FEMDOM*', m)
}

handler.help = ['femdom']
handler.tags = ['nsfw']
handler.command = /^(femdom|nsfwfemdom)$/i

module.exports = handler
