let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let heum = await fetch(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=ConfuMods`)
let json = await heum.buffer()
conn.sendFile(m.chat, json, 'muslos', '*MUSLOS 7w7*', m)
}

handler.help = ['muslos2']
handler.tags = ['nsfw']
handler.command = /^(muslos2)$/i

module.exports = handler
