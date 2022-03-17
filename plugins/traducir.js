const translate = require('translate-google-api')

let handler = async (m, { args, text, usedPrefix, command }) => {
result = await translate(`Hello`, { 'cn', to: 'es' })
m.reply(result[0])
}

handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(traducir|trad|translate)$/i
handler.fail = null

module.exports = handler
