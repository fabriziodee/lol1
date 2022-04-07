const { MessageType } = require('@adiwajshing/baileys')
const { toVideo } = require('../lib/converter')

let handler  = async (m, { conn, args }) => {
  try {
      let q = m.quoted ? m.quoted : m
      if (!q) throw 'Etiqueta un sticker con movimiento para convertirlo a Gif!'
      let img = await q.download()
      convert = await toVideo(img, 'webp')
      conn.sendMessage(m.chat, convert, MessageType.video, { quoted: m})
    } catch {
    m.reply('La conversación falló!')
   }
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = /^(tovideo|tovid|tomp4|amp4)$/i

module.exports = handler

