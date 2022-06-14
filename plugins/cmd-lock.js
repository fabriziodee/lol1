let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!m.quoted) throw '✳️ Responde a un mensaje'
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
  let sticker = db.data.sticker
  let hash = m.quoted.fileSha256.toString('hex')
  if (!(hash in sticker)) throw 'No está registrado en la base de datos'
  sticker[hash].locked = !/^un/i.test(command)
  m.reply('✅ Hecho')
}

handler.help = ['unlockcmd', 'lockcmd']
handler.tags = ['database']
handler.command = /^(unlockcmd|lockcmd)$/i

handler.rowner = true

module.exports = handler
