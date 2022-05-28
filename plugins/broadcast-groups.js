let fs = require ('fs')

let handler  = async (m, { conn, text, participants }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let lolitumb = fs.readFileSync('./storage/image/menu2.jpg')
  let fgif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '*Anuncio 🕊️*', 'jpegThumbnail': lolitumb }}}
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
