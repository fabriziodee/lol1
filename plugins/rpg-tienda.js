let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command }) => {
let tumb = fs.readFileSync('./storage/image/tienda.jpg')
let shop = `\t*• 🪓 Herramientas para Comprar 🎣 •*

*∙ Pico de madera:*
Costo: $15000

*∙ Pico de piedra:*
Costo: $25000

*∙ Pico de hierro:*
Costo: $45000

*∙ Pico de oro:*
Costo: $55000

*∙ Pico de diamante:*
Costo: $75000

\t\t*• 🔩 Intems para Vender 🐡•*

*Minerales:*
*∙ Diamante:*    $750
*∙ Oro:*                 $500
*∙ Hierro:*           $150
*∙ Piedra:*           $10`
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.image, { quoted: m, thumbnail: tumb })
gbutsan = [{ buttonId: `${usedPrefix}inv`, buttonText: { displayText: 'Inventario 🎒' }, type: 1 }, { buttonId: `${usedPrefix}energía`, buttonText: { displayText: 'Energía ⚡' }, type: 1 }]
gbuttonan = { imageMessage: menux.message.imageMessage, contentText: shop, footerText: '-', buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.command = /^(tienda)$/i
handler.owner = true

module.exports = handler
