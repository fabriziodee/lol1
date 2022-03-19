const { toAudio } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Etiqueta un audio o video para convertirlo en mp3!`
  let media = await q.download()
  let audio = await toAudio(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m, mimetype: 'audio/mp4'
  })
}

handler.help = ['tomp3']
handler.tags = ['tools']
handler.command = /^(tomp3|mp3|amp3)$/i

module.exports = handler
