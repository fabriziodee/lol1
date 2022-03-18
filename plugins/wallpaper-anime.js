let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/wallpaper")
let json = res.data
conn.sendFile(m.chat, json.url, 'wallpaper', '*WALLPAPER*', m)
}

handler.help = ['wallanime']
handler.tags = ['random']
handler.command = /^(wallanime|wallpaperanime|wpanime)$/i
handler.limit = false
module.register = false
module.group = true

module.exports = handler
