let handler = async (m, { conn, text, usedPrefix, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  if (!teks) throw `*Ingrese un texto o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} lolibot`
  conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}

handler.help = ['attp']
handler.tags = ['sticker']

handler.command = /^(attp)$/i

module.exports = handler
