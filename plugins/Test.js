let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = m.quoted.mentionedJid
for (let user of users) await m.reply(`@${user.split("@s.whatsapp.net")[0]}`)
}



handler.command = /^(test)$/i

module.exports = handler
