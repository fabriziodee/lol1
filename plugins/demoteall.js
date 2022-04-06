let handler = async (m, { participants, command, text }) => {
  const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }
  const users = getGroupAdmins(participants)
  for (let jid of users) await conn.groupDemoteAdmin(m.chat, jid)
  conn.reply(m.chat, 'Se quito la administración a todos!', m)
}

handler.help = ['demoteall']
handler.tags = ['adm']
handler.command = /^(demoteall)$/i
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
