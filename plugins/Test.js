let handler = async function (m, { conn, text, participants }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    list.push({
      "displayName": text,
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:山田;太郎;(旧姓田中);Mr.;さん\nX-PHONETIC-LAST-NAME:ﾔﾏﾀﾞﾀﾛｳ\nitem1.EMAIL;type=INTERNET:xxxx@ezweb.ne.jp\nitem1.X-ABLabel:_$!!$_\nTITLE:\nURL;type=HOME:\nPHOTO:\nitem3.X-ABDATE:\nitem3.X-ABLabel:_$!!$_\nitem4.X-ABDATE:\nitem4.X-ABLabel:_$!!$_\nBDAY;value=date:\nNICKNAME:\nTEL;type=OTHER;type=VOICE:09012345678\nitem2.ADR;type=OTHER:;;;;;;\nORG:\nEND:VCARD"
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
