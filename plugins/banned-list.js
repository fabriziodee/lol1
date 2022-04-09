let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.DATABASE.data.users).filter(user => user[1].Banneduser)
    
    m.reply(`
*❛ 💌 Lista de chats Baneados 💌 ❜*
Total:  ${chats.length} Chats${chats ? '\n' + chats.map(([jid], i) => `${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ID: ${jid}`.trim()).join('\n') : ''}

*❛ 📧 Lista de usuarios Baneados 📧 ❜*
Total: ${users.length} Usuarios${users ? '\n' + users.map(([jid], i) => `${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
ID: ${jid}`.trim()).join('\n') : ''}
`.trim())
}

handler.help = ['banlist']
handler.tags = ['info']
handler.command = /^(listban|bannedlist|banlist)$/i
handler.rowner = true
module.exports = handler
