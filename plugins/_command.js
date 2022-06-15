let handler = m => m

handler.before = async function (m, { text, command, usedPrefix, m.isCommand }) {
  let isCmd = m.isCommand
  await m.reply(`${JSON.stringify(isCmd, null, 1)}`)
  //if (isCmd == true) {
  //m.reply(`${isCmd ? '✅' : '❎'}`)
  //}
}

module.exports = handler
