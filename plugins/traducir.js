let fetch = require('node-fetch')
const defaultLang = 'es'

let handler = async (m, { args, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    let err = `*Ingrese un texto para traducir o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} es Hello`
    if (!teks) throw err
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        texxt = args.join(' ')
    }
    
    if (!texxt && m.quoted && m.quoted.text) texxt = m.quoted.text

    try {
        res = await fetch(global.API('bg', '/translate', { q: texxt, lang }))
        json = await res.json()
        if (json.status !== true) throw json
    } catch (e) {
        res = await fetch(global.API('bg', '/translate', { q: texxt, defaultLang }))
        json = await res.json()
        if (json.status !== true) throw json
    } finally {
        conn.reply(m.chat, `\t\t*‧ 🌐 Google Traductor 🌐 ‧*\n\n*${json.result.from.language.iso}:* ${texxt}\n*${lang}:* ${json.result.text}`, m)
    }

}

handler.help = ['traducir']
handler.tags = ['tools']
handler.command = /^(traducir|trad|translate)$/i
handler.fail = null

module.exports = handler
