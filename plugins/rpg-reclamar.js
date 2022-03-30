let { MessageType } = require('@adiwajshing/baileys')
const cooldown = 86400000
let handler = async (m, { conn, usedPrefix, command }) => {
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastclaim)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    if (new Date - user.lastclaim > cooldown) {
        conn.reply(m.chat, 'Has reclamado 1000 de dinero y un cofre!', m)
        global.DATABASE._data.users[m.sender].chest += 1
        global.DATABASE._data.users[m.sender].money += 1000
        global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
    } else {
        conn.sendMessage(m.chat, 'Espere *' + timers + '* para volver a reclamar', MessageType.text, { quoted: m })
    }
}

handler.help = ['reclamar']
handler.tags = ['rpg']
handler.command = /^(reclamar|claim|daily)$/i

handler.cooldown = cooldown

module.exports = handler

function clockString(seconds) {
  d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  m = Math.floor((seconds / (1000 * 60)) % 60);
  s = Math.floor((seconds / 1000) % 60);
  
  dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
