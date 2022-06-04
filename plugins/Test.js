let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = await conn.prepareMessageFromContent(m.chat, {
     "sendPaymentMessage": {
      "noteMessage": {
       "extendedTextMessage": {
        "text": "Test"
       }
      }
     }
    }, "expiration": 604800)
await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p)
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
