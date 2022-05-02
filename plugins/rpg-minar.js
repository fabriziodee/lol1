let handler = async (m, { conn, usedPrefix }) => {
	
    let user = global.DATABASE._data.users[m.sender]
    let pickaxe = global.DATABASE._data.users[m.sender].pickaxe
    let pdurability = global.DATABASE._data.users[m.sender].pickaxedurability
    let __waktur = (new Date - global.DATABASE._data.users[m.sender].lastmining)
    let _waktur = (180000 - __waktur)
    let waktur = clockString(_waktur)
    let diamond = (pickaxe == 1 ? (Math.floor(Math.random() * (3 - 5) + 5) + 1) : '' || pickaxe == 2 ? (Math.floor(Math.random() * (5 - 7) + 7) + 1) : '' || pickaxe == 3 ? (Math.floor(Math.random() * (8 - 10) + 10) + 1) : '' || pickaxe == 4 ? (Math.floor(Math.random() * (11 - 13) + 13) + 1) : '' || pickaxe == 5 ? (Math.floor(Math.random() * (15 - 17) + 17) + 1) : '' )
    let gold = (pickaxe == 1 ? Math.floor(Math.random() * 6) : '' || pickaxe == 2 ? Math.floor(Math.random() * 9) : '' || pickaxe == 3 ? Math.floor(Math.random() * 13) : '' || pickaxe == 4 ? Math.floor(Math.random() * 15) : '' || pickaxe == 5 ? Math.floor(Math.random() * 19) : '' )
    let iron = (pickaxe == 1 ? Math.floor(Math.random() * 10) : '' || pickaxe == 2 ? Math.floor(Math.random() * 15) : '' || pickaxe == 3 ? Math.floor(Math.random() * 20) : '' || pickaxe == 4 ? Math.floor(Math.random() * 30) : '' || pickaxe == 5 ? Math.floor(Math.random() * 50) : '' )
    let stone = (pickaxe == 1 ? Math.ceil(Math.random() * 30) : '' || pickaxe == 2 ? Math.ceil(Math.random() * 40) : '' || pickaxe == 3 ? Math.ceil(Math.random() * 60) : '' || pickaxe == 4 ? Math.ceil(Math.random() * 80) : '' || pickaxe == 5 ? Math.ceil(Math.random() * 100) : '' )
    let exp = (pickaxe == 1 ? Math.ceil(Math.random() * 200) : '' || pickaxe == 2 ? Math.ceil(Math.random() * 400) : '' || pickaxe == 3 ? Math.ceil(Math.random() * 600) : '' || pickaxe == 4 ? Math.ceil(Math.random() * 800) : '' || pickaxe == 5 ? Math.ceil(Math.random() * 1000) : '' )
    let durability = Math.floor(Math.random() * 100)
    let goa = (pickRandom(['una cueva 🏔', 'un volcan 🌋', 'jupiter 🪨', 'saturno 🪐']))
    
    if (pickaxe > 0) {
    if (global.DATABASE._data.users[m.sender].pickaxedurability > 99) {
    if (new Date - global.DATABASE._data.users[m.sender].lastmining > 180000) {
       
global.DATABASE._data.users[m.sender].lastmining = new Date * 1
global.DATABASE._data.users[m.sender].diamond += diamond * 1 
global.DATABASE._data.users[m.sender].gold += gold * 1 
global.DATABASE._data.users[m.sender].iron += iron * 1 
global.DATABASE._data.users[m.sender].stone += stone * 1 
global.DATABASE._data.users[m.sender].pickaxedurability -= durability * 1
global.DATABASE._data.users[m.sender].exp += exp * 1

          setTimeout(() => {
          	m.reply(`*Minaste en ${goa} y obtienes*

◦ Diamante: ${diamond}
◦ Oro: ${gold}
◦ Hiero: ${iron}
◦ Piedra: ${stone}
◦ Exp: ${exp}

*⛏ Durabilidad:* -${durability}`)
          }, 0)
          
            } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
         } else m.reply(`Repara tu pico, escribiendo ${usedPrefix}reparar pico`)
     } else m.reply(`Todavía no tienes un pico, compralo escribiendo ${usedPrefix}comprar pico`)
 }

handler.help = ['minar']
handler.tags = ['rpg']

handler.command = /^(mining|minar)$/i
handler.disabled = false

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

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
} 
