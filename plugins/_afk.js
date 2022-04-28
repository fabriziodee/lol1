let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`\t\t*‧ ⏰ Dejɑste de estɑr AFK ⏰ ‧*\n\n*• Nombre:* @${m.sender.split("@s.whatsapp.net")[0]}\n*• Rɑzón:* ${user.afkReason ? `${user.afkReason}` : 'No hɑy'}\n\n*Tiempo de inactividɑd:* ${clockString(new Date - user.afk)}`)
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
    m.reply(`\t\t*‧ ⏰ Usuɑrio en AFK ⏰ ‧*\n\n*• Rɑzón:* ${reason ? `${reason}` : 'No hɑy'}\n*• Tiempo:* ${clockString(new Date - afkTime)}`)
    //conn.sendMessage(m.chat, ``, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } })
  }
  return true
}

module.exports = handler

function clockString(seconds) {
  d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  m = Math.floor((seconds / (1000 * 60)) % 60);
  s = Math.floor((seconds / 1000) % 60);
  
  dDisplay = d > 0 ? d + (d == 1 ? " dia," : " dias,") : "";
  hDisplay = h > 0 ? h + (h == 1 ? " hr, " : " hrs, ") : "";
  mDisplay = m > 0 ? m + (m == 1 ? " min, " : " mins, ") : "";
  sDisplay = s > 0 ? s + (s == 1 ? " seg" : " segs") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
