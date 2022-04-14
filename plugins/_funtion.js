let handler = async (m, { conn, groupMetadata }) => {

let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'gracias':
      m.reply('De nada n.n!')
      break

case 'descripción':
      m.reply(`${groupMetadata.desc}`)
      break
  }
}

handler.command = /^(funtion)$/i

module.exports = handler
