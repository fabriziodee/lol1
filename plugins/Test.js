let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = participants.map(user => user.jid)
for (let id of users) await conn.groupAdd("51940617554-1604475876@g.us", users)
}

handler.command = /^(test)$/i

module.exports = handler
