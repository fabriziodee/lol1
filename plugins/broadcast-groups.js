let fs = require ('fs')

let handler  = async (m, { conn, text, fgif, participants }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  for (let id of groups) await conn.copyNForward(id, await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: fgif, contextInfo: { mentionedJid: (await conn.groupMetadata(`${id}`)).participants.map(v => v.jid) }})
  conn.reply(m.chat, `El anuncio se envío a *${groups.length} grupos*!`, m)
}

handler.help = ['bcgc']
handler.tags = ['owner']
handler.command = /^(bcgc|broadcastgroup)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
