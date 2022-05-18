//let handler = m => {
let handler = async (m, { conn, command, usedPrefix, text }) => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`\t\t\t*‧ 🎐 Listɑ de Mensɑjes 🎐 ‧*

*Mensɑjes:*
${Object.keys(msgs).map(v => '- ' + v).join('\n')}

Si quieres el mensaje escriba
${usedPrefix}getmsg <mensaje>`)
}

handler.help = ['listmsg']
handler.tags = ['database']
handler.command = /^list|lista(msg|mensaje)$/

module.exports = handler
