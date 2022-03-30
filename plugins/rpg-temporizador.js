let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
    let user = global.DATABASE._data.users[m.sender]
    
    const claimcd = 86400000
    let __claim = (new Date - user.lastclaim)
    let _claim = (claimcd - __claim)
    let claim = clockString(_claim)
    
    const miningcd = 180000
    let __mining  = (new Date - user.lastmining)
    let _mining = (miningcd - __mining)
    let mining = clockString(_mining)
    
    const cuttingcd = 180000
    let __cutting  = (new Date - user.lastcutting)
    let _cutting = (cuttingcd - __cutting)
    let cutting = clockString(_cutting)
    
    const fishingcd = 180000
    let __fishing  = (new Date - user.lastfishing)
    let _fishing = (fishingcd - __fishing)
    let fishing = clockString(_fishing)
    
let cd = `\t\t\t*‧ 🕰️ Temporizador 🕰️ ‧*

*[${user.lastclaim <= 0 ? '✅' : '✖️'}] Reclamar 🧰*
*∙ ╰➮* ${user.lastclaim <= 0 ? 'Ya puedes reclamar': `${claim}`}

*[${user.lastmining <= 0 ? '✅' : '✖️'}] Minar ⛏️*
*∙ ╰➮* ${user.lastmining <= 0 ? 'Ya puedes minar' : `${mining}`}

*[${user.lastcutting <= 0 ? '✅' : '✖️'}] Talar 🪓*
*∙ ╰➮* ${user.lastcutting <= 0 ? 'Ya puedes talar' : `${cutting}`}

*[${user.lastfishing <= 0 ? '✅' : '✖️'}] Pescar 🎣*
*∙ ╰➮* ${user.lastfishing <= 0 ? 'Ya puedes pescar' : `${fishing}`}`
conn.sendMessage(m.chat, cd, MessageType.text, { quoted: m})
}

handler.help = ['temporizador']
handler.tags = ['rpg']
handler.command = /^(temporizador|cd)$/i

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
