let handler = async (m, { conn, args }) => {
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + (await conn.groupInviteCode(m.chat)), m)
}

handler.help = ['linkgc']
handler.tags = ['group']
handler.command = /^(linkgroup|linkgc|link|linkgrupo|linkgp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
