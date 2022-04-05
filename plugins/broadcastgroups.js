let fs = require ('fs')

let handler  = async (m, { conn, text, participants }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let ftumb = fs.readFileSync('./storage/image/menu2.jpg')
  let freply = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2022, status: 1, surface : 1, message: '↷✦╎Anuncio a Grupos╎💌˖ ⸙', orderTitle: "↷✦╎Anuncio a Grupos╎💌˖ ⸙", thumbnail: ftumb, sellerJid: '0@s.whatsapp.net' } } }
  //let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Mensaje de difusion en grupos 」')
  for (let id of groups) await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: freply, contextInfo: { mentionedJid: (await conn.groupMetadata("120363020974888410@g.us")).participants.map(v => v.jid) }})
  //conn.sendMessage(id, content, m.mtype, m.msg.contextInfo ? { contextInfo: m.msg.contextInfo } : {})
  conn.reply(m.chat, `El mensaje se envío a *${groups.length} grupos*!`, m)
}

//handler.help = ['test']
//handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
