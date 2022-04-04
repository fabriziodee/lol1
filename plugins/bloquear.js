let handler = async (m, { command, text }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!m.chat) return m.reply('Etiqueta a alguien del grupo para bloquear!')
  conn.blockUser(user, 'add') 
  conn.reply(m.chat, 'Se bloqueo al usuario!', m)
}

handler.help = ['bloquear']
handler.tags = ['owner']
handler.command = /^(bloquear|block)$/i

handler.rowner = true

module.exports = handler
