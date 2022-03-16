let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Etiqueta un mensaje!'
    if (!text) throw `Escriba *${usedPrefix}list${which}* para ver la lista de mensajes`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' se ha registrado en la lista de mensajes`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*El mensaje se agregó a la lista de mensajes como '${text}'*\n\nSi quieres ver el mensaje escriba ${usedPrefix}ver${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + '')
handler.tags = ['database']
handler.command = /^adf(vn|msg|video|audio|img|sticker)$/
handler.rowner = true

module.exports = handler
