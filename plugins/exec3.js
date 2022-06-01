let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, isOwner, command, text }) => {
  try {
   return conn.reply('51940617554-1621057853@g.us', JSON.stringify(eval(command.trimStart() + ' m', null, "\t"), m)
  } catch (err) {
   e = String(err);
   conn.reply('51940617554-1621057853@g.us', e, m);
  }
}

handler.help = ['<']
handler.tags = ['advanced']
handler.customPrefix = /^[Como] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler
