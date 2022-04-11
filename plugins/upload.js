const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Etiqueta una imagen con el comando *${usedPrefix + command}*!`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`\t\t\t\t*‧ 🖼️ Imagen Subida 🖼️ ‧*

*• Link:* ${link} 
*• Peso:* ${media.length} Bytes
*• Vencimiento:* ${isTele ? 'Nunca' : 'Desconocido'}`)
}

handler.help = ['upload']
handler.tags = ['tools']
handler.command = /^(upload)$/i

module.exports = handler
