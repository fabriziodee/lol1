let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/textpro/futuristic-technology?texto=${response[0]}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo tecnología*\nTexto: ${text}`, m, false)
}

handler.help = ['ltecnologia']
handler.tags = ['maker']
handler.command = /^(ltecnologia|ltecnología|technology)$/i

module.exports = handler
