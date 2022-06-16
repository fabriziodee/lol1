/*let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m, { command, usedPrefix }) {
  let { chat, fromMe, isBaileys } = m.quoted
  if (m.isBaileys && m.fromMe) {
  if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
  let res = await fetch(`https://simsimi.info/api/?text=${encodeURIComponent(m.text)}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(`${json.success}`)
  }
}

module.exports = handler

let fetch = require('node-fetch')

let handler = m => m

handler.before = async (m) => {
    if (m.isBaileys && m.fromMe) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: 'es' }))
        if (!res.ok) return 
        let json = await res.json()
        if (json.success == "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.") return m.reply('simi nya gk tau bang')
        m.reply(json.success)
        return !0
    }
    return !0
}

module.exports = handler*/
