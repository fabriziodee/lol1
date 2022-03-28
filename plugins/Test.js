let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
let res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": tumbb,
        "productId": "4938174216214248",
        "title": '✧───────···[ Menu ]···────────✧',
        "description": `Test`,
        "retailerId": `Test2`,
        "url": '\n',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "0@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: m })
  conn.relayWAMessage(res)
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
