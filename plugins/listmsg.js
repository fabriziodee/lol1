//let handler = m => {
let handler = async (m, { conn, command, usedPrefix, text }) => {
    let msgs = global.DATABASE._data.msgs
    let totalmsg = Object.keys(msgs).length
    m.reply(`\t\t\t*‧ 📂 Almɑcenɑmiento 📂 ‧*

*Totɑl:* ${totalmsg} mensajes

*• Mensɑjes:*
${Object.keys(msgs).map(v => '- ' + v).join('\n')}

Escriba *${usedPrefix}getmsg < mensaje >* para
enviar un archivo del almacenamiento`)
}

handler.help = ['listmsg']
handler.tags = ['database']
handler.command = /^list|lista(msg|mensaje)$/

module.exports = handler
