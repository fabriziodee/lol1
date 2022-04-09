let handler = async (m, { conn, text }) => {
  let [ l, r ] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  conn.reply(m.chat, l + readMore + r, m)
}

handler.help = ['leermas']
handler.tags = ['tools']
handler.command = /^(leermas|spoiler|hidetext|readmore)$/i
handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
