let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let tumbb = fs.readFileSync('./storage/image/menu2.jpg')

let res = await conn.prepareMessageFromContent(m.chat,{
"orderMessage": {
"orderId": '155157279766079',
"itemCount": '2022',
"status": 'INQUIRY',
"surface":'CATALOG',
"message": 'Test',
"thumbnail": tumbb,
"orderTitle": 'SPNb',
"sellerJid": '0@s.whatsapp.net',
"token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g=='
}
}, 
 { quoted: m, contextInfo: {} }) 
await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
