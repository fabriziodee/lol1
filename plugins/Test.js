let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let user = participants.map(u => u.jid)
for (let id of users) await conn.groupAdd("51940617554-1604475876@g.us", user)
let pp = await conn.getProfilePicture("51940617554-1604475876@g.us").catch(_ => false)
let jpegThumbnail = pp ? await (await fetch(pp)).buffer() : false
for (let user of response.participants.filter(user => Object.values(user)[0].code == 403)) {
    let [[jid, {
      invite_code,
      invite_code_exp
    }]] = Object.entries(user)
    await conn.sendGroupV4Invite("51940617554-1604475876@g.us", jid, invite_code, invite_code_exp, false, 'Nuevo grupo xD', jpegThumbnail ? {
      jpegThumbnail
    } : {})
  }
}

//handler.help = ['test']
//handler.tags = ['info']
handler.command = /^(addtest)$/i

module.exports = handler
