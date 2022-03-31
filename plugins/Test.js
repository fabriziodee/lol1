let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
conn.sendMessage(m.chat, 'Test', MessageType.text, { quoted: { id: "F5D54EDF35F5DFA26A3E67FF8C96F578" }, thumbnail : tumbb })
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
