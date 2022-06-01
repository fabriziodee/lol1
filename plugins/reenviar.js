let fs = require ('fs')

let handler  = async (m, { args, conn, text, participants }) => {
  if (!m.quoted) throw 'Etiqueta un mensaje para reenviar!'
  let lolitumb = fs.readFileSync('./storage/image/menu2.jpg')
  try {
  let fgif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": 'lolibot', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '*Mensaje reenviado*', 'jpegThumbnail': lolitumb }}}
  let rr = (args[0] ? `${args[0]}` : m.chat)
  await conn.copyNForward('51940617554-1621057853@g.us', await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: fgif })
  } catch (e) {
  conn.reply('51940617554-1621057853@g.us', e, m)
  }
  }

handler.help = ['reenviar']
handler.tags = ['tools']
//handler.customPrefix = /Hmmms/
handler.command = /^(reenviar|reenviarmsg)$/i
handler.admin = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
