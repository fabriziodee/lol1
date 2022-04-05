let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE._data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
*🆙 Nivel:* ${user.level}
Tienes *${user.exp - min}* Exp de *${max}*

Te faltan *${max - user.exp}* para subir de nivel!
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`
Hola @${m.sender.split("@s.whatsapp.net")[0]} subiste de nivel

» 🆙 Nivel: ${before} ➯ ${user.level} 
» ⏰ Hora: ${time}

Cuando mas interactues con la bot mayor sera tu nivel
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^(levelup)$/i

module.exports = handler
