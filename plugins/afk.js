let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Ingresé el motivo de afk*\n\n- Ejemplo: ${usedPrefix + command} A mimir`
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`*[ ⚠️ ] El usuario ${conn.getName(m.sender)} estará inactivo (AFK) no lo etiqueten*\n\n*🔰 Motivo de la inactividad${text ? ': ' + text : ''}*
`)
}
handler.help = ['afk']
handler.tags = ['group']
handler.command = /^(afk)$/i

module.exports = handler
