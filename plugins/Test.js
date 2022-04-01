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

let listMessage = { "title": "💌 Lobita & Gatito 💫", "description": text.trim(), "listType": "PRODUCT_LIST", "productListInfo": { "productSections": [ { "title": "Lolibot - OFC", "products": [ { "productId": "4632867223392342" } ] } ], "headerImage": { "productId": "4632867223392342", "jpegThumbnail": tumbb }, "businessOwnerJid": "380944182435@s.whatsapp.net" }, "footerText": "Lolibot - OFC" }
conn.relayWAMessage(listMessage)
//conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: [m.sender, ownernum] }})

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
