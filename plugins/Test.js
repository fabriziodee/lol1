let handler = async function (m, { conn, text, participants }) {
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${text};;;\nFN:${text}\nitem1.EMAIL;type=INTERNET:${text}\nitem1.X-ABLabel:Pack\nitem2.EMAIL;type=INTERNET:${text}\nitem2.X-ABLabel:Pack\n`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": "77 Contact",
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}

//handler.help = ['test']
//handler.tags = ['group']
handler.command = /^(test)$/i
//handler.group = true
handler.owner = true

module.exports = handler
