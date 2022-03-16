let axios = require("axios");
let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw '*Ingrese un link que desea acortar*\n\n- Ejemplo: ${usedPrefix + command} https://github.com/g4tito'
let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=cb15ed422c71a2fb`)).json()
if (!json.status) throw json
let hasil = `\t\t*‧ [ 🌟 Enlace Acortado 🌟 ] ‧*\n\n*• Link anterior:*\n${text}\n\n*• Link nuevo:*\n${json.result}`
m.reply(hasil)
}

handler.help = ['tinyurl']
handler.tags = ['tools']
handler.command = /^(tinyurl|short2|acortar|corto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
