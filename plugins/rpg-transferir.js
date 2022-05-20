let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, text, usedPrefix, command, DevMode }) => {
        if (!text) return m.reply(`*Ejemplo, uso del comando*\n• ${usedPrefix + command} <tipo> <cantidad> <@tag>\n\n- Ejemplo: ${usedPrefix + command} dinero 100 @tag\n\n*Tipos de transferencias:*\n\n- Dinero\n- Diamante\n- Pocion`)
        let type = (args[0] || ' ').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Etiqueta a alguien del grupo para realizar la transferencia!'
        let users = global.DATABASE._data.users
        
        switch (type) {
            case 'dinero':
            case 'dineros':
                if (global.DATABASE._data.users[m.sender].money >= count * 1) {
                        global.DATABASE._data.users[m.sender].money -= count * 1
                        global.DATABASE._data.users[who].money += count * 1
                        conn.reply(m.chat, `Se transfirió *${count}* de dinero`, m)
                } else conn.reply(m.chat, `No tienes suficiente *dinero* para transferir`, m)
                break
                
            case 'pocion':
            case 'poción':
            case 'pociones':
            case 'pociónes':
                if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        global.DATABASE._data.users[who].potion += count * 1
                        conn.reply(m.chat, `Se transfirió *${count}* de pocion`.trim(), m)
                } else conn.reply(m.chat, `No tienes suficientes pociones para transferir`.trim(), m)
                break
                
            case 'diamante':
            case 'diamantes':
                if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE._data.users[m.sender].diamond -= count * 1
                        global.DATABASE._data.users[who].diamond += count * 1
                        conn.reply(m.chat, `Se transfirió *${count}* de diamante`.trim(), m)
                } else conn.reply(m.chat, `No tienes suficientes diamantes para transferir`.trim(), m)
                break

            default:
            let test = 55
            return conn.reply(m.chat, `El artículo *${args[0]}* no está para transferir!`, m)
        }
}

handler.help = ['transferir']
handler.tags = ['rpg']
handler.command = /^(transferir|transfer)$/i
handler.group = true 

handler.fail = null

module.exports = handler
