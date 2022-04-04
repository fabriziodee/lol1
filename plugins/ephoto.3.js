const { ephoto3 } = require('../lib/ephoto3.js')

let handler = async(m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `*Ingrese un texto para hacer el logo*\n\n- Ejemplo: ${usedPrefix + command} M y G`
if (text.length > 15) throw 'El texto es demasiado largo, mínimo 15 caracteres!'
let result = await ephoto3('https://en.ephoto360.com/text-heart-flashlight-188.html', `${text}`)
let uh = `https://s1.ephoto360.com${result.image}`
conn.sendFile(m.chat, uh,'p.jpg', `*LOGO CORAZÓN*\n*Texto:* ${text}`, m)
}

handler.help = ['logocorazón']
handler.tags = ['maker']
handler.command = /^(logocorazon|logocorazón)$/i

handler.fail = null

module.exports = handler
