let handler = m => m

handler.before = async function (m, { user, command, usedPrefix }) {
        //let q = m.quoted ? m.quoted : m
        if (command.includes(`${usedPrefix + command}`)) {
            m.reply('Test comando no registrado')
        }
}

module.exports = handler
