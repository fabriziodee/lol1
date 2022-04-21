let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = participants.map(user => user.jid)
for (let id of chats) await conn.groupAdd("51940617554-1604475876@g.us", users)
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(test)$/i

module.exports = handler
