let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let res = await axios("https://nekos.life/api/v2/img/solo")
let json = res.data
conn.sendFile(m.chat, json.url, 'solo', '*SOLO*', m)
}

handler.help = ['solo']
handler.tags = ['nsfw']
handler.command = /^(solo)$/i
handler.nsfw = true

module.exports = handler
