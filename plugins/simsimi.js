let fetch = require('node-fetch')

let handler = async (m, { text }) => {
  let res = await fetch(`https://simsimi.info/api/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) m.reply(`${json.success}`)
  else throw json
}

handler.help = ['simi']
handler.tags = ['fun']
handler.command = /^(simi|simsimi)$/i
handler.register = false

module.exports = handler

