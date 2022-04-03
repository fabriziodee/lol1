let handler = async (m, { conn, usedPrefix }) => {
	
	let user = global.DATABASE._data.users[m.sender]
	let rod = global.DATABASE._data.users[m.sender].rod
	let fdurability = global.DATABASE._data.users[m.sender].roddurability
    let __waktur = (new Date - global.DATABASE._data.users[m.sender].lastfishing)
    let _waktur = (180000 - __waktur)
    let waktur = clockString(_waktur)
    let blowfish = (rod == 1 ? Math.floor(Math.random() * 5) : '' || rod == 2 ? Math.floor(Math.random() * 7) : '' || rod == 3 ? Math.floor(Math.random() * 10) : '' || rod == 4 ? Math.floor(Math.random() * 20) : '' || rod == 5 ? Math.floor(Math.random() * 30) : '' )
    let tropicalfish = (rod == 1 ? Math.floor(Math.random() * 10) : '' || rod == 2 ? Math.floor(Math.random() * 17) : '' || rod == 3 ? Math.floor(Math.random() * 25) : '' || rod == 4 ? Math.floor(Math.random() * 40) : '' || rod == 5 ? Math.floor(Math.random() * 55) : '' )
    let commonfish = (rod == 1 ? Math.ceil(Math.random() * 200) : '' || rod == 2 ? Math.ceil(Math.random() * 250) : '' || rod == 3 ? Math.ceil(Math.random() * 300) : '' || rod == 4 ? Math.ceil(Math.random() * 350) : '' || rod == 5 ? Math.ceil(Math.random() * 500) : '' )
    let exp = (rod == 1 ? Math.ceil(Math.random() * 200) : '' || rod == 2 ? Math.ceil(Math.random() * 400) : '' || rod == 3 ? Math.ceil(Math.random() * 600) : '' || rod == 4 ? Math.ceil(Math.random() * 800) : '' || rod == 5 ? Math.ceil(Math.random() * 1000) : '' )
    let durability = Math.floor(Math.random() * 100)
    let goa = (pickRandom(['un rio 🚣‍♀', 'el mar 🚤']))
    
    if (rod > 0) {
    if (global.DATABASE._data.users[m.sender].roddurability > 99) {
    if (new Date - global.DATABASE._data.users[m.sender].lastfishing > 180000) {
       
global.DATABASE._data.users[m.sender].lastfishing = new Date * 1
global.DATABASE._data.users[m.sender].blowfish += blowfish * 1 
global.DATABASE._data.users[m.sender].tropicalfish += tropicalfish * 1 
global.DATABASE._data.users[m.sender].commonfish += commonfish * 1 
global.DATABASE._data.users[m.sender].roddurability -= durability * 1
global.DATABASE._data.users[m.sender].exp += exp * 1

          setTimeout(() => {
          	m.reply(`*Pescaste en ${goa} y obtienes*
          
- Pez globo: ${blowfish}
- Pez tropical: ${tropicalfish}
- Pez comun: ${commonfish}
- Exp: ${exp}

*🎣Durabilidad:* -${durability}`)
          }, 0)
          
            } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}*`)
         } else m.reply(`Repara tu caña de pescar, escribiendo ${usedPrefix}reparar caña`)
     } else m.reply(`Todavía no tienes una caña de pescar, compralo escribiendo ${usedPrefix}comprar caña`)
 }

handler.help = ['pescar']
handler.tags = ['rpg']

handler.command = /^(pescar|fishing)$/i
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
