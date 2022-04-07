let handler = m => m

handler.before = async function (m, { text, command, usedPrefix }) {
        //let q = m.quoted ? m.quoted : m
        let isCmd = text.includes(command)
        if (!isCmd) {
            m.reply('Test de comando no registrado')
        }
}

module.exports = handler
