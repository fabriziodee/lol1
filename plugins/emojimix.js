const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let fetch = require('node-fetch')
let fs = require("fs")

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `*• Ingrese dos emojis pɑrɑ mezclɑr*\n\n*Ejemplo de uso:*\n1. ${usedPrefix + command} <emoji1 + emoji2>\n2. ${usedPrefix + command} 🐱+👻`
let [emoji1, emoji2] = text.split`+`
try {
const anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
let emix = anu.results[0].media_formats.png_transparent.url
let stiker = await sticker(null, emix, global.packname, global.author)
conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
} catch (e) {
return m.reply(`*• No se encontro el emoji!*\n\n\n\`\`\`${e}\`\`\``)
}
}

handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix|emix)$/i

module.exports = handler
