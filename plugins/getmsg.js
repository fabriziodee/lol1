let handler = async (m, { conn, command, usedPrefix, text }) => {
    //let which = command.replace(/ver/i, '')
    if (!text) throw `Escriba ${usedPrefix}listmsg para ver la lista de mensajes!`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `El mensaje *${text}* no esta registrado`
    //let _m = await conn.serializeM(msgs[text])
    //await _m.copyNForward(m.chat, true)
    await conn.copyNForward(m.chat, await conn.loadMessage(msgs.jid, msgs.msg), false, { quoted: m })
}

handler.help = ['getmsg']
handler.tags = ['database']
handler.command = /^ver|get(msg|mensaje)$/
handler.rowner = true

module.exports = handler
