let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto para el logo*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
conn.reply(m.chat, wait, m)
let res = `https://api-alc.herokuapp.com/api/textpro/neon-devil-wings?texto=${text}&apikey=ConfuMods`
conn.sendFile(m.chat, res, 'error.jpg', `*Logo alas fuego neon*\nTexto: ${text}`, m, false)
}

handler.help = ['lalas']
handler.tags = ['maker']
handler.command = /^(lalas|neonfire)$/i
module.exports = handler
