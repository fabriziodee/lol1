let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn }) => {
let tumb = fs.readFileSync('./storage/gif/Shop.gif')
await conn.sendFile(m.chat, tumb, 'out.gif', 'Test', m, 0, { mimetype: 'video/gif' })
//await conn.sendMessage(m.chat, "https://telegra.ph/file/1b948dd3985abfb5aecf4.mp4", MessageType.video, { mimetype: 'video/gif', filename: `Shop.gif`, quoted: m, caption: 'Test'})
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
