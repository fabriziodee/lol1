let handler = m => m

handler.before = async function (m, { text, command, usedPrefix }) {
  if (m.isCommand = true) {
   m.reply('✅')
  }
}

module.exports = handler
