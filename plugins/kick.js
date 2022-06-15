let handler = async (m, { command, text, groupMetadata }) => {
  const content = JSON.stringify(m.message)
  const type = Object.keys(m.message)[0]
  const isQuotedTag = type === "extendedTextMessage" && content.includes("mentionedJid")
  let user = (isQuotedTag && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender)
  if (!user) return m.reply('Etiqueta a alguien del grupo para eliminar!')
  if (!groupMetadata.participants.some(v => v.jid === user)) return m.reply('El usuario ya no está en el grupo!')
  let owr = m.chat.split`-`[0]
  if (user.startsWith(owr)) return m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  conn.groupRemove(m.chat, [user])
  m.reply(`Se eliminó a *@${user.split('@')[0]}*`)
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(kick|ban|echar)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
