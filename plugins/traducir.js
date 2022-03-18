let fetch = require('node-fetch')
let handler = async (m, { args, text, usedPrefix, command }) => {
    let text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let msg = `*Ingrese un texto para traducir*\n\n- Ejemplo: ${usedPrefix + command} es Hello`
    if (!teks) return m.reply(msg)
    let lang = 'es'
    let texxt = args.join(' ')
    if (args[0].length == 2 && args.length > 0) {
        lang = args[0]
        text = args.slice(1).join(' ')
    }
    let res = await fetch(global.API('bg', '/translate', {
        q: text,
        lang
    }))
    let json = await res.json()
    if (json.status !== true) throw json
    conn.reply(m.chat, `\t\t*‧ 🌐 Google Traductor 🌐 ‧*\n\n*${json.result.from.language.iso}:* ${text}\n*${lang}:* ${json.result.text}`, m)
}

handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(traducir|trad|translate)$/i
handler.fail = null

module.exports = handler
