let handler = async (m, { command, text }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  conn.groupRemove(m.chat, [user])
  }

handler.help = ['kick']
handler.tags = ['test']
handler.command = /^(kick)$/i

module.exports = handler
