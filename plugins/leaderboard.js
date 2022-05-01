let handler = async (m, { conn, args }) => {
  const name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  const sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  const sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  const sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  const sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  const usersExp = sortedExp.map(v => v[0])
  const usersLim = sortedLim.map(v => v[0])
  const usersmoney = sortedmoney.map(v => v[0])
  const userslevel = sortedlevel.map(v => v[0])
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(7, sortedExp.length)
}

let type = (args[0] || ' ').toLowerCase()

switch (type) {
case 'dinero':
case 'money':
          let dinero = `\t\t\t*T O P - D I N E R O*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + `\n*💵 Dinero:* $${shortNum(data.money)}\n\n`).join`\n`}
`
m.reply(dinero)
break

default:
let text = `
• *💫 Top ${len} de clasificacion de nivel* •
Posicion: *${userslevel.indexOf(m.sender) + 1}* de *${userslevel.length}*

${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.level + ' Nivel*').join`\n`}

• *💵 Top ${len} de clasificacion de dinero* •
Posicion: *${usersmoney.indexOf(m.sender) + 1}* de *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + `: *${shortNum(data.money)} Dinero*`).join`\n`}

• *🎟️ Top ${len} de clasificacion de limite* •
Posicion: *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length}*

${sortedLim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.limit + ' Limite*').join`\n`}
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...userslevel.slice(0, len), ...usersmoney.slice(0, len), ...usersLim.slice(0, len)]
    }
  })
}

handler.help = ['lb']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i
handler.fail = null
handler.exp = 0

module.exports = handler

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
