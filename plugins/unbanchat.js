let handler = async (m, { conn }) => {
  if (global.opts["self"] == true) return m.reply('El modo *privado* está activado!')
  if (!(m.chat in global.DATABASE._data.chats)) return m.reply('Este grupo no está registrado en la base de datos!')
  let chat = global.DATABASE._data.chats[m.chat]
  if (!chat.isBanned) return m.reply('Este grupo no está baneado!')
  chat.isBanned = false
  m.reply('*Grupo desmuteado 🔊*\n\nAhora todos pueden utilizar los comandos')
}

handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat)$/i
handler.owner = true
handler.mods = true
handler.group = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
