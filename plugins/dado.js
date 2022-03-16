let { MessageType } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn }) => {
let num = Math.floor(Math.random() * 6)
let dado = fs.readFileSync(`./storage/sticker/dado${num}.webp`)
conn.sendMessage(m.chat, dado, MessageType.sticker, { quoted: m })
}

handler.help = ['dado']
handler.tags = ['fun']
handler.command = /^(dado)$/i

module.exports = handler
