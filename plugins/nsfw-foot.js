let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE._data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'foot', '*FOOT*', m)
}

handler.help = ['foot']
handler.tags = ['nsfw']
handler.command = /^(foot|nsfwfoot)$/i

module.exports = handler
