let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')


let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
let tumb = fs.readFileSync('./storage/image/menu.jpg')
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.video, { quoted: m, thumbnail: tumb, contextInfo: { externalAdReply: { title: "あなたは私のすべてです", body: "💌 Lobita & Gatito 💫", previewType: "PHOTO", thumbnail: tumbb, sourceUrl: "" } } })
gbutsan = [{ buttonId: '.info', buttonText: { displayText: '🛰 INFO' }, type: 1 }, { buttonId: '.owner', buttonText: { displayText: '🎋 CREADOR' }, type: 1 }]
gbuttonan = { videoMessage: menux.message.videoMessage, contentText: `Test`, footerText: '  Lolibot - OFC', buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender, ownernum], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
