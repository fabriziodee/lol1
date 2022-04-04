let handler = async (m, { conn, args }) => {
   m.reply('Test')
  //let userb = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  //conn.groupRemove(m.chat, [userb])
  //let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  //let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  //for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}

handler.help = ['eliminar']
handler.tags = ['admin']
handler.command = /^(eliminar)$/i
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
