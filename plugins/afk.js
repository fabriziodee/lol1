let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*• Ingrese su motivo de AFK*\n\n*Ejemplo de uso:*\n1. ${usedPrefix + command} <motivo>\n2. ${usedPrefix + command} se fue ɑ mimir`
  if (text.length > 300) return m.reply('El texto es demɑsiɑdo lɑrgo mínimo 300 cɑrɑcteres')
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  //conn.sendMessage(m.chat, ``, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } }) 
  m.reply(`\t\t*‧ ⏰ Ahorɑ estɑs en AFK ⏰ ‧*\n\n*• Nombre:* @${m.sender.split("@s.whatsapp.net")[0]}\n*• Rɑzón:* ${text ? `${text}` : 'No hɑy'}\n\nSi ɑlguien te etiquetɑ serά notificɑdo`)
}

handler.help = ['afk']
handler.tags = ['group']
handler.command = /^(afk)$/i

handler.group = true

module.exports = handler
