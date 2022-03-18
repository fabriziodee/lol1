let fetch = require('node-fetch')
let handler = async (m, { args, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let msg = `*Ingrese un texto para traducir*\n\n- Ejemplo: ${usedPrefix + command} es Hello`
    if (!teks) return m.reply(msg)
    let lang = (args[0] || 'es')
    let texxt = args.join(' ')
    if (args[0].length == 2 && args.length > 0) {
        lang = args[0]
        teks = args.slice(1).join(' ')
    }
    let res = await fetch(global.API('bg', '/translate', {
        q: teks,
        lang
    }))
    let json = await res.json()
    if (json.status !== true) throw json
    conn.reply(m.chat, `\t\t*‧ 🌐 Google Traductor 🌐 ‧*\n\n*${json.result.from.language.iso}:* ${teks}\n*${lang}:* ${json.result.text}`, m)
}

handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(traducir|trad|translate)$/i
handler.fail = null

module.exports = handler
