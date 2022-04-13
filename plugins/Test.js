let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
let tumb = fs.readFileSync('./storage/image/menu.jpg')
const vcard = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'N:Test\n'
 + 'FN:Test\n'
 + 'item1.EMAIL;type=INTERNET:Test owo\n'
 + 'item1.X-ABLabel:Pack\n'
 + 'item2.EMAIL;type=INTERNET:Test owo\n'
 + 'item2.X-ABLabel:Pack\n'
 + 'PHOTO;BASE64:tumb\n'
 + 'END:VCARD'

 conn.sendMessage(m.chat, { displayname: "gatito", vcard: vcard }, MessageType.contact, { quoted: m })
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler
