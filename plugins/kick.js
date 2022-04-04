let handler = async (m, { command, text }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!m.chat) return m.reply('Etiqueta a alguien del grupo para eliminar!')
  conn.groupRemove(m.chat, [user])
  conn.reply(m.chat, 'Se eliminó al usuario!', m)
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(kick|ban)$/i
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
