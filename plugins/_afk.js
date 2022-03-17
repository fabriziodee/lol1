let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    conn.sendMessage(m.chat, `\t\t*‧ ⏰ Dejaste de estar AFK ⏰ ‧*\n\n• Nombre: @${m.sender.split("@s.whatsapp.net")[0]}\n• Razón: ${user.afkReason ? `${user.afkReason}` : 'No hay'}\n\nTiempo de inactividad: ${clockString(new Date - user.afk)}`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } })
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
conn.sendMessage(m.chat, `\t\t*‧ [ 🚧 Usuario en AFK 🚧 ] ‧*\n\n• Razón: ${reason ? `${reason}` : 'No hay'}\n• Tiempo: ${clockString(new Date - afkTime)}`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } })
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
