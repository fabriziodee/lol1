let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`*Etiqueta a alguien del grupo*\n\n- Ejemplo: ${usedPrefix + command} @tag nombre`)
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw `*Etiqueta a alguien del grupo*\n\n- Ejemplo: ${usedPrefix + command} @tag nombre`
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  return conn.sendContact(m.chat, who, txt || conn.getName(who), m)
}
handler.help = ['save']
handler.tags = ['group']

handler.command = /^(save)$/

module.exports = handler
