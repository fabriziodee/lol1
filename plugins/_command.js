let handler = m => m

handler.before = async function (m, { text, command, usedPrefix }) {
        if (!m.isCommand) {
            m.reply('Test de comando no registrado')
        }
}

module.exports = handler
