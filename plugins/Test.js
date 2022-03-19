let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')


let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
const buttonsDefault = [ { urlButton: { displayText: `group whatsapp`, url: `https://chat.whatsapp.com/JtreUWX9m9dJaAff9Te1ae` } }, ]
await conn.sendMessage(m.chat, { text: 'test', footer: 'test2', templateButtons: buttonsDefault }, { quoted: m })
}

handler.help = ['test']
handler.tags = ['premium']
handler.command = /^(test)$/i

module.exports = handler
