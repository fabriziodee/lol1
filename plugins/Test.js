let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = m.quoted.mentionedJid
for (let user of users) {
let use = `- @${user.jid.split("@s.whatsapp.net")[0]}\n`
}
await m.reply(`@${use.split("@s.whatsapp.net")[0]}`)
}



handler.command = /^(test)$/i

module.exports = handler
