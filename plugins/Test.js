let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
