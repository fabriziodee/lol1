let handler = async (m, { usedPrefix, command, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text 
  if (!teks) throw `*Ingrese un texto o etiqueta uno*\n\n- Ejemplo: ${usedPrefix + command} gato`
  m.reply(Buffer.from(txt, 'utf-8').toString('base64'))
}

handler.help = ['base64']
handler.tags = ['tools']
handler.command = /^(base64)$/i

module.exports = handler
