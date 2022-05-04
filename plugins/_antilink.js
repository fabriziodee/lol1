let { MessageType, mentionedJid } = require("@adiwajshing/baileys");
let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antilink && isGroupLink) {
    if (isAdmin) return m.reply('Menos mal que eres un administrador')
    if (!isBotAdmin) return m.reply('Menos mal que no soy administradora del grupo')
    await this.groupRemove(m.chat, [m.sender])
    await this.sendMessage(m.chat, `\t\t\t\t*‧ ⭕ Enlace Detectado ⭕ ‧*\n\n*• Nombre:* @${m.sender.split("@s.whatsapp.net")[0]}\n*• Fecha:* ${date}\n*• Enlace:* WhatsApp.com`, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [m.sender] } })
    //let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    //let isLinkThisGc = new RegExp(linkGC, 'i')
    //let isgclink = isLinkThisGc.test(m.text)
    //if (isgclink) return m.reply('Menos mal que este enlace es del grupo :v')
    //await this.groupRemove(m.chat, [m.sender])
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
