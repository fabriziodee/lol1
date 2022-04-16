let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/photooxy/under-grass?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo cesped*\nTexto: ${text}`, m, false)
}

handler.help = ['cesped']
handler.tags = ['maker']
handler.command = /^(undergrass|logocesped|cesped)$/i

module.exports = handler
