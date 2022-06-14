let handler = async (m, { conn }) => {
  conn.reply(m.chat, `\t\t*∙ 🎐 Lista de comandos Sticker 🎐 ∙*


${Object.entries(global.DATABASE._data.sticker).map(([key, value], index) => `*• ID:* ${value.locked ? `${key} (bloqueado)` : key}\n*• Cmd:* ${value.text}`).join('\n\n\n')}
`, m, null, {
     mentions: Object.values(global.DATABASE._data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
  })
}

handler.help = ['listcmd']
handler.tags = ['database']
handler.command = /^(listcmd)$/i

module.exports = handler
