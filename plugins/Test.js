let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn }) => {
let tumb = fs.readFileSync('./storage/gif/Shop.gif')
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.image, { quoted: m, thumbnail: tumb })
gbutsan = [{ buttonId: 'test', buttonText: { displayText: 'Test' }, type: 1 }, { buttonId: 'test', buttonText: { displayText: 'Test 2' }, type: 1 }]
gbuttonan = { imageMessage: menux.message.imageMessage, contentText: '*Test shop*', footerText: '-', buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
