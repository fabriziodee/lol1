const translate = require('translate-google-api')
const defaultLang = 'es'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
let msg = `*Ingrese un texto o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} es Hello`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*Traducción:* ' +  result[0]) }}

handler.help = ['traducir']
handler.tags = ['internet']
handler.command = /^(translate|traducir)$/i

handler.fail = null

module.exports = handler
