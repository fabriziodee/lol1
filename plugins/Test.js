let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

let encmediats = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let dlfile = await conn.downloadMediaMessage(encmediats)
let bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
m.reply(bas64)
var mantap = await convertSticker(bas64, `-`, `-`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(m.chat, imageBuffer, MessageType.sticker, { quoted: m })

}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
