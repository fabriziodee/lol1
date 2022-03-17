const translate = require('translate-google-api')
const defaultLang = 'es'
const tld = 'cn'

let handler = async (m, { args, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
if (!teks) return m.reply(`*Ingrese un texto o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} es Hello`)
let lang = (args[0] || defaultLang)
let textt = (args.slice(1).join(' ') || teks)
result = await translate(`${textt}`, { tld, to: lang, })
m.reply('*Traducción:* ' +  result[0])
}

handler.help = ['traducir']
handler.tags = ['internet']
handler.command = /^(translate|traducir)$/i

handler.fail = null

module.exports = handler
