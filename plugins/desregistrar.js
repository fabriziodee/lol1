const { createHash } = require('crypto')

let handler = async function (m, { args }) {
  if (!args[0]) throw 'Ingrese el codigo que se le dio al momento de registrarse'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'El codigo es incorrecto!'
  user.registered = false
  m.reply(`Se elimino tu registro con exito!`)
}

handler.help = ['unreg']
handler.tags = ['xp']
handler.command = /^(desregistrar|unregister|unreg)$/i
handler.register = true

module.exports = handler

