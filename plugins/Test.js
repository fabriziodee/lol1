let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let users = m.quoted.mentionedJid
await m.reply(`Test` + users.map(v => '- @' + v.replace(/@.+/, '')).join`\n`)
//members_id = []
//for (let user of users) {
//let use += `- @${user.jid.split("@s.whatsapp.net")[0]}\n`
//members_id.push(user.jid)
//}
//await m.reply(use)
}



handler.command = /^(test)$/i

module.exports = handler
