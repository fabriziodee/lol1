global.math = global.math ? global.math : {}
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let id = m.chat
  if (id in global.math) {
    clearTimeout(global.math[id][3])
    delete global.math[id]
    m.reply(`*Ingrese un problema matemático*\n\n- Ejemplo: ${usedPrefix + command} 12+1`)
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Formato incorrecto, solo soporta nuneros del 0-9 y símbolos -, +, *, /, ×, ÷, π, e, (, )'
  }
}
handler.help = ['calc']
handler.tags = ['tools']
handler.command = /^(cal|calc|calculadora)$/i
handler.exp = 5

module.exports = handler
