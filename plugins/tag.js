const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  let lolitumb = fs.readFileSync('./storage/image/menu2.jpg')
  let fgif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '*Notificación 📍*', 'jpegThumbnail': lolitumb }}}
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: fgif
      }
    ),
    text || q.text 
  )
  await conn.relayWAMessage(msg)
}

handler.help = ['tag']
handler.tags = ['adm']
handler.command = /^(hidetag|tag|notify)$/i

handler.group = true
handler.admin = true

module.exports = handler

