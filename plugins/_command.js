let handler = m => m

handler.before = async function (m, { user, command, usedPrefix }) {
        //let q = m.quoted ? m.quoted : m
        if (`${command}` == command) {
            m.reply('Test comando no registrado')
        }
}

module.exports = handler
