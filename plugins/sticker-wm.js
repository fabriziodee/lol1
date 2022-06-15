const { addExif } = require('../lib/sticker.js')

let handler = async (m, { conn, text }) => {
  let isSticker = 'Etiqueta un sticker'
  if (!m.quoted) throw isSticker
  let stiker = false
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw isSticker
    let img = await m.quoted.download()
    if (!img) throw isSticker
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
    else throw 'La conversión falló'
  }
}

handler.help = ['wm']
handler.tags = ['sticker']
handler.command = /^(tak|wm)$/i

module.exports = handler
