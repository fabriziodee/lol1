let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
yahaha = await conn.prepareMessageFromContent(m.chat, {
orderMessage: {
itemCount : "2022",
//status: 1,
surface: "750",
message: "Test",
orderTitle: 'Lolibot - OFC', 
thumbnail: tumbb, 
sellerJid: '0@s.whatsapp.net' 
}}, {});
conn.relayWAMessage(yahaha)
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
