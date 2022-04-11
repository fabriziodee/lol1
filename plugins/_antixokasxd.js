let { MessageType, mentionedJid } = require("@adiwajshing/baileys");
let handler = m => m

let linkRegex = /xokas/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antilink && isGroupLink) {
    await this.groupRemove(m.chat, [m.sender])
    //await this.sendMessage(m.chat, `\t\t\t\t*‧ [ ⭕ Enlace Detectado ⭕ ] ‧*\n\n• Nombre: @${m.sender.split("@s.whatsapp.net")[0]}\n• Fecha: ${date}\n• Enlace: WhatsApp.com`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } })
    //if (isAdmin) return m.reply('Menos mal que eres un administrador')
  }
  return true
}


module.exports = handler


let d = new Date(new Date + 3600000)
let locale = 'es'
let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
