let fetch = require('node-fetch')
const defaultLang = 'es'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `*Ingrese un texto para traducir o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} es Hello`
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
        res = await fetch(global.API('bg', '/translate', { q: text, lang }))
        json = await res.json()
        if (json.status !== true) throw json
    } catch (e) {
        res = await fetch(global.API('bg', '/translate', { q: text, defaultLang }))
        json = await res.json()
        if (json.status !== true) throw json
    } finally {
        conn.reply(m.chat, `\t\t*‧ 🌐 Google Traductor 🌐 ‧*\n\n*${json.result.from.language.iso}:* ${text}\n*${lang}:* ${json.result.text}`, m)
    }

}

handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(traducir|trad|translate)$/i
handler.fail = null

module.exports = handler
