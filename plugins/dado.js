let { MessageType } = require("@adiwajshing/baileys")
let fs = require('fs')

let handler = async (m, { conn }) => {
let dd = ["1", "2", "3", "4", "5", "6"]
let ra = dd[Math.floor(Math.random() * dd.length)]
let dado = fs.readFileSync(`./storage/sticker/dado${ra}.webp`)
conn.sendMessage(m.chat, dado, MessageType.sticker, { quoted: m })
}

handler.help = ['dado']
handler.tags = ['fun']
handler.command = /^(dado)$/i

module.exports = handler
