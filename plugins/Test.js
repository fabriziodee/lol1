let { MessageType } = require("@adiwajshing/baileys")
let fs = require ('fs')

let handler = async (m, { conn, text }) => {
let tumbb = fs.readFileSync('./storage/image/menu2.jpg')
let [[jid, { invite_code, invite_code_exp }]] = Object.entries(m.sender)
conn.sendGroupV4Invite(m.sender, jid, invite_code, invite_code_exp, false, 'Test')

}

handler.help = ['test']
handler.tags = ['owner']
handler.command = /^(test)$/i
handler.rowner = true

module.exports = handler
