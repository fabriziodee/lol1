let handler = async (m, { command, text }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!m.chat) return m.reply('Etiqueta a alguien del grupo para desbloquear!')
  conn.blockUser(user, 'remove') 
  conn.reply(m.chat, 'Se desbloqueo al usuario!', m)
}

handler.help = ['desbloquear']
handler.tags = ['owner']
handler.command = /^(desbloquear|desblock)$/i

handler.rowner = true

module.exports = handler
