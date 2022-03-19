let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/itachi?apikey=APIKEY`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'itachi', '*ITACHI*', m)
}

handler.help = ['itachi']
handler.tags = ['random']
handler.command = /^(itachi)$/i

module.exports = handler
