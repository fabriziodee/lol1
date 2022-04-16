let handler = async (m, { conn, usedPrefix }) => {
    //let reg = Object.entries(global.DATABASE._data.chats).filter(chat => chat[1].isBanned)
    let reg = Object.entries(global.DATABASE._data.users).filter(user => user[1].registered)
    m.reply(`*❛ 📧 Usuarios registrados 📧 ❜*

Total: ${reg.length} Usuarios${reg ? '\n' + reg.map(([jid], i) => `${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ID: ${jid}`.trim()).join('\n') : ''}
`.trim())
}

handler.help = ['reglist']
handler.tags = ['info']
handler.command = /^(reglist)$/i

module.exports = handler
