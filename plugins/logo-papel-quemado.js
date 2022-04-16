let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/photooxy/burn-paper?texto=${text}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo papel quemado*\nTexto: ${text}`, m, false)
}

handler.help = ['lpapel']
handler.tags = ['maker']
handler.command = /^(lpapel|burnpaper)$/i

module.exports = handler
