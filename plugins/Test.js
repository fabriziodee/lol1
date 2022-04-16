let crypto = require('crypto')

let handler = async (m, { conn, usedPrefix }) => {
await m.reply(`${toShort(65512)}`)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler

function toShort(number) {
  const int16 = new Int16Array(1)
  int16[0] = number
  return int16[0]
}

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}
