let { MessageType, Mimetype } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumb = fs.readFileSync('./storage/image/menu2.jpg')
let tumbb = fs.readFileSync('./storage/gif/Shop.gif')
conn.sendMessage(m.chat, tumbb, MessageType.video, { quoted: m })
//await conn.sendFile(m.chat, tumbb, 'out.gif', '*Test*', m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}

//handler.help = ['test']
//handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
