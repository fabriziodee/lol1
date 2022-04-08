let { MessageType } = require('@adiwajshing/baileys')

async function handler(m, { conn, args, isROwner }) {
    let user = global.DATABASE._data.users[m.sender]
    let count = (args[0] && number(parseInt(args[0])) ? Math.max(parseInt(args[0]), 1) : /all/i.test(args[0]) ? Math.floor(parseInt(user.money)) : 1) * 1
    if ((user.money * 1) < count) return conn.sendMessage(m.chat, button('*Tu dinero no es suficiente para apostar*', user), MessageType.buttonsMessage, { quoted: m })
    let moneyDulu = user.money * 1
    let Bot = (Math.ceil(Math.random() * 100)) * 1
            let Kamu = (Math.floor(Math.random() * 86)) * 1
            let status = 'Pierdes!'
            if (Bot < Kamu) {
                user.money += count * 1
                status = 'Ganas!'
            } else if (Bot > Kamu) {
                user.money -= count * 1
            } else {
                status = 'Seri'
                user.money += (Math.floor(count / 1.5)) * 1
            }
            m.reply(`
💸 *APUESTA* 💸

Bot roll: *${Bot}*
User roll: *${Kamu}*

Tu *${status}* ${status == 'Ganas!' ? `*+${count * 2}*` : status == 'Pierdes!' ? ` *-${count * 1}*` : `*+${Math.floor(count / 1.5)}*`} de dinero
`.trim())
}
  
handler.help = ['apostar']
handler.tags = ['rpg']
handler.command = /^(apostar)$/i

module.exports = handler


function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}
