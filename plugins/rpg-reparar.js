const Uppickaxe = 1000
const Uprod = 1000
const Upaxe = 1000

let handler = async (m, { conn, usedPrefix, command, args }) => {

let chat = global.DATABASE._data.chats[m.chat]
let user = global.DATABASE._data.users[m.sender]
let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'pico':
      if (global.DATABASE._data.users[m.sender].pickaxedurability >= 5000) return conn.reply(m.chat, 'Tu pico tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Uppickaxe * 1) {
      	global.DATABASE._data.users[m.sender].pickaxedurability += 500
          global.DATABASE._data.users[m.sender].money -= Uppickaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu pico* por ${Uppickaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu pico que cuesta ${Uppickaxe} de dinero`, m)
      break

case 'caña':
      if (global.DATABASE._data.users[m.sender].roddurability >= 5000) return conn.reply(m.chat, 'Tu caña tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Uprod * 1) {
      	global.DATABASE._data.users[m.sender].roddurability += 500
          global.DATABASE._data.users[m.sender].money -= Uprod * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu caña* por ${Uprod} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu caña que cuesta ${Uprod} de dinero`, m)
      break

case 'hacha':
      if (global.DATABASE._data.users[m.sender].axedurability >= 5000) return conn.reply(m.chat, 'Tu hacha tiene la durabilidad máxima', m)
      if (global.DATABASE._data.users[m.sender].money > Upaxe * 1) {
      	global.DATABASE._data.users[m.sender].axedurability += 500
          global.DATABASE._data.users[m.sender].money -= Upaxe * 1
          conn.reply(m.chat, `Se aumento la *durabilidad de tu hacha* por ${Upaxe} de dinero` ,m)
          } else conn.reply(m.chat, `Tu dinero no es suficiente para aumentar la durabilidad de tu hacha que cuesta ${Upaxe} de dinero`, m)
      break

    default:
let rep = `
*Ingrese la herramienta que quiere reparar*

- Ejemplo: ${usedPrefix + command} pico

*Lista de herramientas*
- Pico
- Hacha
- Caña
`.trim()
return m.reply(rep)
  }
}

//handler.help = ['reparar']
//handler.tags = ['rpg']
handler.command = /^(repararxxx)$/i

module.exports = handler
