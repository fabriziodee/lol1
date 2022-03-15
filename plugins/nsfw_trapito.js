let axios = require("axios")
let handler = async (m, { conn, usedPrefix, command }) => {
let group = global.DATABASE.data.chats[m.chat]
if (group.isNsfw) return m.reply('En este grupo no se permite el contenido +18')
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let imgurl = await(await fetch(json.url)).buffer()
conn.sendMessage(m.chat, imgurl, MessageType.image, { quoted: m, caption: '*UN TRAPITO <3*' })
}

handler.help = ['trapito']
handler.tags = ['random']
handler.command = /^(trapito|htrap|trap)$/i
handler.limit = true

module.exports = handler

