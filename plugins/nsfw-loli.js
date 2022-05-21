let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'hloli', '*LOLI*', m)
}

handler.help = ['hloli']
handler.tags = ['nsfw']
handler.command = /^(hloli|nsfwloli)$/i
handler.nsfw = true

module.exports = handler
