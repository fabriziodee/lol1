let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}

handler.help = ['kick']
handler.tags = ['admin']
handler.command = /^(kick)$/i
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
