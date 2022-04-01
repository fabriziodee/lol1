let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
yahaha = await conn.prepareMessageFromContent(m.chat, {
orderMessage: {
itemCount: "750",
status: "INQUIRY",
surface: "CATALOG",
message: "Test",
orderTitle: 'MAMPUS', 
sellerJid: '0@s.whatsapp.net' 
}}, {});
conn.relayWAMessage(yahaha)
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
