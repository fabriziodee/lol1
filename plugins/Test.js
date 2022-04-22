let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = m.quoted.mentionedJid
for (let user of users) {
let teks = `- @${user.jid.split('@')[0]}\n`
}
m.reply(teks)
}



handler.command = /^(test)$/i

module.exports = handler
