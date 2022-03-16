let os = require('os')
let util = require('util')
let { sizeFormatter } = require('human-readable')
let speed = require('performance-now')
let fs = require("fs");
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, text, usedPrefix }) => {
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
  const groupsIn = groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let totalfeatures = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length
  let infot = fs.readFileSync('./storage/image/menu2.jpg')
  let ownum = "51940617554@s.whatsapp.net"
  let info = `
\t🐋〃 Creador: @${ownum.split("@s.whatsapp.net")[0]}
\t❄️〃 Navegador: ${conn.browserDescription[1]}
\t🐋〃 Version: ${conn.browserDescription[2]}
\t❄️〃 Servidor: ${conn.browserDescription[0]}
\t🐋〃 Comandos: ${totalfeatures} Total
\t❄️〃 Prefijo: ${usedPrefix}
\t🐋〃 Velocidad: ${latensi.toFixed(4)} Segundos
\t❄️〃 Chat Privado: ${chats.length - groups.length}
\t🐋〃 Chat de Grupos: ${groups.length}
\t❄️〃 Chat Totales: ${chats.length}
\t🐋〃 Tiempo activo: ${uptime}
\t❄️〃 Usuarios: ${totalreg} Numeros
\t🐋〃 Bateria: ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Cargando...' : '⚡ Desconectado'}` : 'Desconocido'}
\t❄️〃 Sistema operativo: ${conn.user.phone.device_manufacturer}
\t🐋〃 Version de Wsp: ${conn.user.phone.wa_version}
\t❄️〃 Bots secundarios: ${totaljadibot.length} Total
`.trim() 
  conn.reply(m.chat, info, text, { quoted: m, contextInfo: { externalAdReply:{title: `↷✦╎Info - Bot╎💌˖ ⸙`, previewType:"PHOTO",thumbnail: infot, sourceUrl:``}, mentionedJid: [ownum]}})
}
handler.help = ['info']
handler.tags = ['info']

handler.command = /^(info|infobot)$/i

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
