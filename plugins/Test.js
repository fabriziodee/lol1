let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let user = participants.map(u => u.jid)
for (let jid of user) await conn.groupAdd("51940617554-1604475876@g.us", jid)
//conn.sendButton(jid, 'Si quieres entrar al grupo minecraft bedrock y permanecer por toda tu eternidad preciona el botón xd', `Si no ves el botón escribe *${usedPrefix}mc*`, '✅ Si quiero', `${usedPrefix}mc`)
}

handler.command = /^(addmc)$/i

module.exports = handler
