const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
 try {
  if (text) {
    let img = await (await fetch('https://leyscoders-api.herokuapp.com/api/textto-image?text=' + encodeURIComponent(text))).buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, global.packname, global.author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply(error)
  }
}

handler.help = ['ttp']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null

module.exports = handler
