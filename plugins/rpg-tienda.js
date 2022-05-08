let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

//Pico
const Pickaxe1 = 175000 //Madera
const Pickaxe2 = 225000 //Piedra
const Pickaxe3 = 325000 //Hierro
const Pickaxe4 = 375000 //Oro
const Pickaxe5 = 475000 //Diamante

//Hacha
const Axe1 = 100000 //Madera
const Axe2 = 150000 //Piedra
const Axe3 = 250000 //Hierro
const Axe4 = 300000 //Oro
const Axe5 = 400000 //Diamante

//Caña
const Rod1 = 250000 //Normal

let handler = async (m, { conn, usedPrefix, command }) => {
let tumb = fs.readFileSync('./storage/image/tienda.jpg')
let tt = "```"
let shop = `\t*• 🪓 Herramientas para Comprar 🎣 •*

*⛏ Picos para Minar*
${tt}∙ Madera:   $${Pickaxe1}
∙ Piedra:   $${Pickaxe2}
∙ Hierro:   $${Pickaxe3}
∙ Oro:      $${Pickaxe4}
∙ Diamante: $${Pickaxe5}${tt}

*🪓 Hachas para Talar*
${tt}∙ Madera:   $${Axe1}
∙ Piedra:   $${Axe2}
∙ Hierro:   $${Axe3}
∙ Oro:      $${Axe4}
∙ Diamante: $${Axe5}${tt}

*🎣 Caña para Pescar*
${tt}∙ Normal:   $${Rod1}${tt}

\t\t*• 🔩 Intems para Vender 🐡 •*

*💎 Minerales:*
${tt}∙ Diamante: $750
∙ Oro:      $500
∙ Hierro:   $150
∙ Piedra:   $10${tt}

*🐟 Peces:*
${tt}∙ Globo:    $500
∙ Tropical: $300
∙ Comun:    $50${tt}

*Maderas:*
${tt}∙ Roble:    $10${tt}`
let note = `*Nota:* Al comprar una herramienta se suben de nivel de madera hasta el diamante

*No puedes comprar una herramienta en especifico*`
let menux =  await conn.prepareMessage(m.chat, tumb, MessageType.image, { quoted: m, thumbnail: tumb })
gbutsan = [{ buttonId: `${usedPrefix}inv`, buttonText: { displayText: 'Inventario 🎒' }, type: 1 }, { buttonId: `${usedPrefix}energía`, buttonText: { displayText: 'Energía ⚡' }, type: 1 }]
gbuttonan = { imageMessage: menux.message.imageMessage, contentText: shop, footerText: note, buttons: gbutsan, headerType: 4 }
await conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true }, quoted: m })
}

handler.help = ['tienda']
handler.tags = ['rpg']
handler.command = /^(store|tienda|shop)$/i
handler.group = true

module.exports = handler
