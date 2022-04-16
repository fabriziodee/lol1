let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/photooxy/coffee-cup?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo café*\nTexto: ${text}`, m, false)
}

handler.help = ['lcafe']
handler.tags = ['maker']
handler.command = /^(lcafé|lcafe|coffe|logocoffe)$/i

module.exports = handler
