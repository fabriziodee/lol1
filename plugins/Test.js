let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn }) => {
let tumb = fs.readFileSync('./storage/gif/Shop.gif')
await conn.sendMessage(m.chat, tumb, MessageType.video, { mimetype: 'video/gif', filename: `Shop.gif`, quoted: m, caption: 'Test'})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
