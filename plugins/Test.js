let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
if (!text) throw '*Ingrese un número*\n\n- Ejemplo: ${usedPrefix + command} 100 GB`
if (Number(text.split(' MB')[0]) >= 70.00) return m.reply(`✳️ El archivo es demasiado grande, la descarga se canceló`)
if (Number(text.split(' GB')[0]) >= 70.00) return m.reply(`✳️ El archivo es demasiado grande, la descarga se canceló`)
}

handler.help = ['test']
handler.tags = ['premium']
handler.command = /^(test)$/i

module.exports = handler
