let fs = require('fs')
let crypto = require('crypto')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
let test = createHash('shake256', { outputLength: 7 }).update(m.sender).digest('hex')
await m.reply(test)
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler
