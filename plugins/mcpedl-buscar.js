let tod = require('tod-api');
let axios = require("axios");
let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Ingrese un texto justo al comando'
  conn.reply(m.chat, global.wait, m)
  let mc = await tod.mcpedl(text)
  let msg = mc.map(({ name, category, date, desc, link }) => {
    return `*• Nombre:* ${name}\n*• Categoria:* ${category}\n*• Fecha:* ${date}\n*• Descripción:* ${desc}\n*• Link:* ${link}`
  }).join`\n\n─────────────────\n\n`
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  if (ss.includes('html')) throw ''
  let res = await conn.prepareMessage(m.chat, ss, MessageType.image, { quoted: m, caption: '\t\t\t\t*‧ 🔎 Mcpedl Busqueda 🔎 ‧*\n\n─────────────────\n\n' + msg})
  let typenya = res.message.imageMessage

  typenya["height"] = 55
  typenya["width"] = 100

  await conn.relayWAMessage(res)
}

handler.help = ['mcpdl']
handler.tags = ['search']
handler.command = /^(mcpedl|mcpdl)$/i

module.exports = handler
