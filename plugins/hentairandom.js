let axios = require("axios")
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.isNsfw) {
conn.reply(m.chat, wait, m)
heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'hentai', '*HENTAI*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai|hentay)$/i
handler.limit = true

module.exports = handler
