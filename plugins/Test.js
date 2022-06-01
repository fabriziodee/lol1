let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

var msg = {...m}

let typenya = msg.message
await m.reply(`${JSON.stringify(typenya, null, 1)}`)

//typenya["viewOnce"] = true

//typenya["fileLength"] = 99999999999

//typenya["height"] = 7

//typenya["width"] = 700

typenya["caption"] = `Test`

let pe = await conn.prepareMessageFromContent(m.chat, msg.message, { quoted: m, contextInfo: {"mentionedJid": conn.parseMention(typenya.caption)} })

await conn.relayWAMessage(pe)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
