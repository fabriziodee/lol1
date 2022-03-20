let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'miku', `*MIKU*`, m)
}

handler.help = ['miku']
handler.tags = ['random']
handler.command = /^(micu|miku)$/i

module.exports = handler
