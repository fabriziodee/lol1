let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
let res = await conn.prepareMessageFromContent(m.chat ,{ "orderMessage": { "itemCount": 999999999, "message": 'Test', "footerText": "© lolibot", "jpegThumbnail": tumbb, "surface": 'CATALOG' }}, { quoted: m })
conn.relayWAMessage(res)
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
