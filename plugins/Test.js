let fs = require('fs')
let crypto = require('crypto')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
let cd = crypto.createHash('sha256', text)
m.reply(cd)
 conn.sendMessage(m.chat, { displayname: "By 「gatitoツ」", vcard: vcard }, MessageType.contact, { quoted: m })
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler
