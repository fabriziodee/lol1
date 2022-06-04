let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
  "requestPaymentMessage": {
   "noteMessage": {
    "extendedTextMessage": {
     "text": "-"
    }
   }
  }
 }, {})

let typenya = p.message.requestPaymentMessage.noteMessage.extendedTextMessage

typenya["text"] = 'Test owo'

await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p, {waitForAck: true})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
