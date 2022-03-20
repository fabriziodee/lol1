let fetch = require('node-fetch')
let handler = m => m

handler.before = function (m, { user, text }) {
  if (m.isBaileys && m.fromMe) {
  	
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let { success } = json
m.reply(`${success}`)
}
}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
