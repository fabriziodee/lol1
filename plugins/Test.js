let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
const vcard = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:Test\n'
 + 'ORG:Creador de la lolibot xD;\n'
 + 'TEL;type=CELL;type=VOICE;waid=51940617554:+51940617554\n'
 + 'item1.EMAIL;type=INTERNET:Gatito@gmail.com\n'
 + 'END:VCARD'
 
 conn.sendMessage(m.chat, { displayname: "gatito", vcard: vcard }, MessageType.contact, { quoted: m })
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler
