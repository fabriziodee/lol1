let handler = async (m, { conn, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(conn.chats.get(id).presences), conn.user.jid]
  conn.reply(m.chat, '*Lista de usuarios en línea:*\n\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: online }
  })
}

handler.help = ['enlinea']
handler.tags = ['group']
handler.command = /^(enlinea|online|here|listonline)$/i
handler.group = true
handler.fail = null

module.exports = handler

