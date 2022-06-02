let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let res = await conn.prepareMessageFromContent(m.chat, {
"sendPaymentMessage": {
      "noteMessage": {
       "extendedTextMessage": {
        "text": "Test"
       }
      }
     }
    }, { quoted: m })
await conn.relayWAMessage(res)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
