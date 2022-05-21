let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
conn.reply(m.chat, wait, m)
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
conn.sendFile(m.chat, json.url, 'trapito', '*UN TRAPITO <3*', m)

handler.help = ['trapito']
handler.tags = ['nsfw']
handler.command = /^(trapito|htrap|trap)$/i
handler.nsfw = true

module.exports = handler

