let fs = require('fs')

let handler = async (m, { conn }) => {
const number = [
  'dado1',
  'dado2',
  'dado3',
  'dado4',
  'dado5',
  'dado6'
];

let dado = `./storage/sticker/${number}.webp`
conn.sendFile(m.chat, dado, 'dado.webp', m )
}

handler.help = ['dado']
handler.tags = ['fun']
handler.command = /^(dado)$/i

module.exports = handler
