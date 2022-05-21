let fetch = require('node-fetch')

let handler  = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yuri2?apikey=ConfuMods`)
json = await heum.buffer()
conn.sendFile(m.chat, json, 'yuri', '*YURI*', m)
}

handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i
handler.nsfw = true

module.exports = handler
