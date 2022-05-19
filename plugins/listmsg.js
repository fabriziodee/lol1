//let handler = m => {
let handler = async (m, { conn, command, usedPrefix, text }) => {
    let msgs = global.DATABASE._data.msgs
    let totalmsg = Object.keys(msgs).length
    let msgaa = Object.entries(global.DATABASE._data.msgs).filter(ms => ms[1].mtype == 'image/webp')
    let msgbb = Object.entries(global.DATABASE._data.msgs).filter(ms => ms[1].mtype == 'image/jpeg')
    let msgcc = Object.entries(global.DATABASE._data.msgs).filter(ms => ms[1].mtype == 'conversation')
    let msgdd = Object.entries(global.DATABASE._data.msgs).filter(ms => ms[1].mtype == 'application/vnd.android.package-archive')
    
    m.reply(`\t\t\t*‧ 📂 Almɑcenɑmiento 📂 ‧*

*Totɑl:* ${totalmsg} mensajes

*• Stickers:*
${msgaa ? '' + msgaa.map(([msgt], i) => `- ${!msgt.mtype == 'image/webp' ? '```Error```' : `${msgt}` }`).join('\n') : ''}

*• Imάgenes:*
${msgbb ? '' + msgbb.map(([msgt], i) => `- ${!msgt.mtype == 'image/jpeg' ? '```Error```' : `${msgt}` }`).join('\n') : ''}

*• Mensɑjes:*
${msgcc ? '' + msgcc.map(([msgt], i) => `- ${!msgt.mtype == 'conversation' ? '```Error```' : `${msgt}` }`).join('\n') : ''}

*• Archivos:*
${msgdd ? '' + msgdd.map(([msgt], i) => `- ${!msgt.mtype == 'application/vnd.android.package-archive' ? '```Error```' : `${msgt}` }`).join('\n') : ''}

Escribɑ *${usedPrefix}getmsg < mensɑje >* pɑrɑ enviɑr
un mensɑje del ɑlmɑcenɑmiento`)
}

//${Object.keys(msgs).map(v => '- ' + v).join('\n')}

handler.help = ['listmsg']
handler.tags = ['database']
handler.command = /^list|lista|stora|almacenami(ento|ge|msg|mensaje)$/

module.exports = handler
