let handler = async function (m, { conn, participants }) {
  let list = []
  for (let i of participants.map(u => u.jid)) {
    //let users = participants.map(u => u.jid)
    let name = conn.getName(i)
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Test\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m, contextInfo: { mentionedJid: users } })
}

handler.help = ['contagall']
handler.tags = ['group']
handler.command = /^(contagall|contacall|contactall|conall)$/i
handler.group = true
handler.admin = true

module.exports = handler
