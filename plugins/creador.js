let handler = async function (m, { conn }) {
  let list = []
  let owner = [global.owner[0]
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = this.getName(global.owner[0] + '@s.whatsapp.net')
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Creador de la loli bot xD\nitem2.EMAIL;type=INTERNET:Gatito@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:github.com/g4tito\nitem3.X-ABLabel:Github\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    })
  }
  let res = await conn.prepareMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })

 let typenya = res.message.contactsArrayMessage

 typenya["displayName"] = '777 contacts'

 await conn.relayWAMessage(res)
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = /^(creador|owner|creator)$/i

module.exports = handler
