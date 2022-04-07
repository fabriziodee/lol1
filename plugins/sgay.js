const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m.quoted
  if (!q) throw 'Etiqueta una imagen!'
 try {
  let q = m.quoted ? m.quoted : m.quoted
  if (!q) throw 'Etiqueta una imagen!'
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Etiqueta una imagen!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tamaño o formato no soportado!`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', '/api/canvas/rainbow', { url }) //`https://api.dhamzxploit.my.id/api/canvas/rainbow?url=${url}`
  let stiker = await sticker(null, wanted, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply(error)
  }
}

handler.help = ['sgay']
handler.tags = ['sticker']
handler.command = /^(sgay|sgai|rainbow)$/i

module.exports = handler
