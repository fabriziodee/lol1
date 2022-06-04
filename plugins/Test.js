let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

let p = conn.prepareMessageFromContent(m.chat, {
  "liveLocationMessage": {
   "degreesLatitude": false,
    "degreesLongitude": false,
     "sequenceNumber": "1654310182646001",
      "caption": "Test owo",
       "jpegThumbnail": false
  }
 }, {})

await m.reply(`${JSON.stringify(p, null, 1)}`)
await conn.relayWAMessage(p, {waitForAck: true})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
