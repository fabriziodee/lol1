let axios = require("axios")

let handler = async (m, { conn, usedPrefix, command }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.nsfw) {
conn.reply(m.chat, wait, m)
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
conn.sendFile(m.chat, json.url, 'trapito2', '*UN TRAPITO <3*', m)
} else m.reply('En este grupo no se permite el contenido +18')
}

handler.help = ['trapito2']
handler.tags = ['nsfw']
handler.command = /^(trapito2|trap2|htrap2)$/i
handler.limit = true

module.exports = handler
