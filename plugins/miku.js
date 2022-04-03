let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/miku?apikey=apirey`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'miku', '*MIKU*', m, false)
}

handler.help = ['miku']
handler.tags = ['random']
handler.command = /^(miku)$/i

module.exports = handler
