const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 let qq = m.quoted ? m.quoted : m
 let mimee = (qq.msg || qq).mimetype || '' 
 if (!/image/g.test(mimee)) throw 'Etiqueta una imagen para convertirlo a sticker círculo!'
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Etiqueta una imagen para convertirlo a sticker círculo!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Archivo ${mime} no es compatible!`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = global.API('dzx', '/api/canvas/circle', { url }) //`https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}`
  let stiker = await sticker(null, wanted, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply(global.error)
  }
}

handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^(círculo|circulo|circle|scircle)$/i

module.exports = handler
