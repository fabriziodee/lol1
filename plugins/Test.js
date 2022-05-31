let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {

var msg = {...m}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage

typenya["viewOnce"] = false

typenya["fileLength"] = 99999999999

//typenya["height"] = 7

//typenya["width"] = 700

typenya["caption"] = `\t\t\t*‧ 👁 ViewOnce Detectado  👁 ‧*\n\n*• Usuario:* @${m.sender.split("@")[0]}\n*• Fecha:* ${date}\n*• Hora:* ${time}\n*• Texto:* ${(typenya.caption === '') ? 'No hay' : typenya.caption}`

let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: m.sender, id: m.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : { "viewOnce": true } } } } } :  { key: { fromMe: false, participant: m.sender, id: m.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : { "viewOnce": true } } } } }

let pe = await conn.prepareMessageFromContent(m.chat, msg.message.viewOnceMessage.message, { quoted: peq, contextInfo: {"mentionedJid": conn.parseMention(typenya.caption)} })
await m.reply(`${JSON.stringify(msg.message.viewOnceMessage.message, null, 1)}`)

await conn.relayWAMessage(pe)

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
