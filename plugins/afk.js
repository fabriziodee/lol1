let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Ingresé el motivo de afk*\n\n- Ejemplo: ${usedPrefix + command} A mimir`
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  //conn.sendMessage(m.chat, ``, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } }) 
  m.reply(`\t\t*‧ ⏰ Ahora estas en AFK ⏰ ‧*\n\n• Nombre: @${m.sender.split("@s.whatsapp.net")[0]}\n• Razón: ${text ? `${text}` : 'No hay'}\n\nSi alguien te etiqueta será notificado`)
}

handler.help = ['afk']
handler.tags = ['group']
handler.command = /^(afk)$/i

handler.group = true

module.exports = handler
