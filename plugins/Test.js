let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
     "sendPaymentMessage": {
      "noteMessage": {
       "extendedTextMessage": {
        "text": "Test"
       }
      }
     }})
await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p)
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
