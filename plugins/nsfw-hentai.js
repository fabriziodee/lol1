let axios = require("axios")
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (!chat.nsfw) return m.reply(global.nsfw)
conn.reply(m.chat, wait, m)
heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'hentai', '*HENTAI*', m)
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai|hentay)$/i

module.exports = handler
