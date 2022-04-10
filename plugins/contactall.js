let handler = async function (m, { conn }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let users = participants.map(u => u.jid)
    let name = this.getName(users)
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Test\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}

handler.help = ['contacall']
handler.tags = ['group']
handler.command = /^(contacall|contactall|conall)$/i

module.exports = handler
