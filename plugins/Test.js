let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = m.quoted.mentionedJid
for (let user of users) {
teks += `- @${user.jid.split('@')[0]}\n`} mentions(users, true,{ contextInfo: { mentionedJid: users } })
}
}



handler.command = /^(test)$/i

module.exports = handler
