let handler = async (m, { conn }) => {
  let group = await conn.chats.all().filter(v => v.jid.endsWith('g.us'))
  let txt = ''
  for (let v of group) txt += `${await conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]\n\n`
  m.reply( '*Lista de grupos:*\n' + txt.trim())
}

handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(gro?up(s|list)|listgro?ups?)$/i

module.exports = handler

