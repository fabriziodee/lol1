let handler  = async (m, { conn, text, participants }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  //let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Mensaje de difusion en grupos 」')
  for (let id of groups) await conn.copyNForward(id, await conn.loadMessage(m.chat, m.quoted.id), true, { contextInfo: { mentionedJid: participants.map(u => u.id) }})
  //conn.sendMessage(id, content, m.mtype, m.msg.contextInfo ? { contextInfo: m.msg.contextInfo } : {})
  conn.reply(m.chat, `El mensaje se envío a *${groups.length} grupos*!`, m)
}

handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(broadcastgroup|bcgc)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

