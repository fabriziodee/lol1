let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, usedPrefix, command }) => {
let tumb = fs.readFileSync('./storage/image/tienda.jpg')
let shop = `\t*• 🪓 Herramientas para Comprar 🎣 •*

*⛏ Minar*
*∙ Pico de madera:*
Costo: $35000

*∙ Pico de piedra:*
Costo: $45000

*∙ Pico de hierro:*
Costo: $65000

*∙ Pico de oro:*
Costo: $75000

*∙ Pico de diamante:*
Costo: $95000

*🪓 Talar*
*∙ Hacha de madera:*
Costo: $20000

*∙ Hacha de piedra:*
Costo: $30000

*∙ Hacha de hierro:*
Costo: $50000

*∙ Hacha de oro:*
Costo: $60000

*∙ Hacha de diamante:*
Costo: $80000

\t\t*• 🔩 Intems para Vender 🐡•*

*Minerales:*
*∙ Diamante:*    $750
*∙ Oro:*                 $500
*∙ Hierro:*           $150
*∙ Piedra:*           $10

*Peces:*
*∙ Globo:*          $500
*∙ Tropical:*      $300
*∙ Comun:*        $50`
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.image, { quoted: m, thumbnail: tumb })
gbutsan = [{ buttonId: `${usedPrefix}inv`, buttonText: { displayText: 'Inventario 🎒' }, type: 1 }, { buttonId: `${usedPrefix}energía`, buttonText: { displayText: 'Energía ⚡' }, type: 1 }]
gbuttonan = { imageMessage: menux.message.imageMessage, contentText: shop, footerText: '-', buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.command = /^(tienda)$/i
handler.owner = true

module.exports = handler
