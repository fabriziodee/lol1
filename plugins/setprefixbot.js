let handler = async(m, { conn, text }) => {
  if (!text) throw `No Prefix detected...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`Se cambió el prefijo a *${text}*`)
    // conn.fakeReply(m.chat, 'Prefix telah ditukar ke *${text}*', '0@s.whatsapp.net', 'Set Prefix Bot')
}
handler.help = ['setprefix']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

module.exports = handler
