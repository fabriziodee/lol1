global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted) return
  if (m.quoted.sender != conn.user.jid) return
  if (!/^Cuanto es el resultado de/i.test(m.quoted.text)) return
  if (!(m.chat in global.math)) return conn.reply(m.chat, 'Esa pregunta ya ha terminado!', m)
  if (m.quoted.id == global.math[id][0].id) {
  let math = global.math[id][1]
  if (m.text == math.result) {
    conn.reply(m.chat, `*Respuesta correcta!*\n+${math.bonus} Exp`, m)
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(global.math[id][3])
    delete global.math[id]
  } else {
    if (--global.math[id][2] == 0) {
      conn.reply(m.chat, `Se acabo el tiempo!\n*Respuesta:* ${math.result}`, m)
      clearTimeout(global.math[id][3])
      delete global.math[id]
    } else conn.reply(m.chat, `*Respuesta incorrecta!*\nQuedan ${global.math[id][2]} oportunidades`, m)
  }
 }
}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
