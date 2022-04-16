let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/textpro/on-the-beach?texto=${text}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo en la playa*\nTexto: ${text}`, m, false)
}

handler.help = ['lplaya']
handler.tags = ['maker']
handler.command = /^(lplaya|logoplaya|playa)$/i

module.exports = handler
