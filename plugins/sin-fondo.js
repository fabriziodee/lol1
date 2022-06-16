let { MessageType } = require('@adiwajshing/baileys')
let { removeBackgroundFromImageFile } = require('remove.bg')
let fs = require('fs')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) throw 'Etiqueta una imagen para convertirlo sin fondo!'
  conn.reply(m.chat, global.wait, m)
  let encmedianb = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  let median = await conn.downloadAndSaveMediaMessage(encmedianb)
  let keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
  await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', 'sinfondo.png'}).then(res => {
  fs.unlinkSync(median)
  let buffer = Buffer.from(res.base64img, 'base64')
  conn.sendMessage(m.chat, buffer, MessageType.image, { quoted: m, caption: '✅ Listo'})
  })
}

handler.help = ['sinfondo']
handler.tags = ['tools']
handler.command = /^(sinfondo)$/i

module.exports = handler
