let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
let listMessage = {
      "title": "Sewa Bot",
      "description": "Sewa Bot",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "Sewa Bot",
            "products": [
              {
                "productId": "4632867223392342"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4632867223392342",
          "jpegThumbnail": tumbb
          },
        "businessOwnerJid": "380944182435@s.whatsapp.net"
      },
      "footerText": "Rikka-Bot By @caliph91_"
    }
  

 conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
