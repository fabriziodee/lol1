let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw '*Ingrese un texto para cambiar la descripción del grupo*\n\n- Ejemplo: ${usedPrefix + command} lolibot grupo'
  await conn.groupUpdateDescription(m.chat, text);
  m.reply('Se cambió la descripción del grupo!')
}

handler.help = ['setdesc']
handler.tags = ['adm']
handler.command = /^(setdesk|setdesc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

module.exports = handler
