let handler = m => {
    let msgs = global.DATABASE._data.msgs
    m.reply(`\t\t*‧ 🎐 Listɑ de Mensɑjes 🎐 ‧*

*Mensɑjes:*
${Object.keys(msgs).map(v => '- ' + v).join('\n')}`)
}

handler.help = ['listmsg']
handler.tags = ['database']
handler.command = /^list|lista(msg|mensaje)$/

module.exports = handler
