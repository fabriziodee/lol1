let handler = async (m, { conn, usedPrefix }) => {
    let reg = Object.entries(global.DATABASE._data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.DATABASE._data.users).filter(user => user[1].Banneduser)
    m.reply(`
*❛ 💌 Lista de chats Baneados 💌 ❜*
Total:  ${reg.length} Chats${chats ? '\n' + chats.map(([jid], i) => `${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ID: ${jid}`.trim()).join('\n') : ''}


*❛ 📧 Lista de usuarios Baneados 📧 ❜*
Total: ${users.length} Usuarios${users ? '\n' + users.map(([jid], i) => `${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ID: ${jid}`.trim()).join('\n') : ''}
`.trim())
}

handler.help = ['reglist']
handler.tags = ['info']
handler.command = /^(reglist)$/i

module.exports = handler
