let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
//Test
  let teks = m.quoted ? m.quoted : m.quoted
  if (!teks) throw 'Etiqueta un mensaje para enviar a todos los chats!'
  //let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let faketumb = fs.readFileSync('./storage/image/menu2.jpg')
  let fakereply = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2022, status: 1, surface : 1, message: '↷✦╎lolibot╎💌˖ ⸙', orderTitle: "↷✦╎lolibot╎💌˖ ⸙", thumbnail: faketumb, sellerJid: '0@s.whatsapp.net' } } }
  //let content = (/bcgc|broadcastgroup|bcgrup|bcgrup|broadcastgc/i.test(text) ? text : text + '\n' + readMore + '「 ' + conn.getName(conn.user.jid) + ' Mensaje de difusion en grupos 」')
  await conn.copyNForward("51940617554-1600359399@g.us", await conn.loadMessage(m.chat, m.quoted.id), false, { quoted: fakereply })
  //conn.sendMessage(id, content, m.mtype, m.msg.contextInfo ? { contextInfo: m.msg.contextInfo } : {})
  m.reply('El mensaje se envío a @573218938795!')
}

//handler.help = ['test']
//handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
