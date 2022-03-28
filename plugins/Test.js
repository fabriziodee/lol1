let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
imeg = await conn.prepareMessage(m.chat, tumbb, 'imageMessage')
imeu = imeg.message.imageMessage
conn.relayWAMessage(await conn.prepareMessageFromContent(m.chat, {productMessage: {
businessOwnerJid: '51940617554@s.whatsapp.net',
product: {
productId: '1011',
productImage:imeu,
title: 'HALO SAYA SELFBOT',
description:  `Silahkan Ketik #menu`,
currencyCode: 'IDR',
priceAmount1000: '10000000',
retailerId: '0507',
url: 'https://wa.me/51940617554',
productImageCount: 1,
salePriceAmount1000: '7.8000',
}
}
}, { quoted: m }))

}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
