let tod = require('tod-api');
let axios = require("axios");
let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Ingrese un texto justo al comando'
  let mc = await tod.mcpedl(text)
  let msg = search.map(({ name, category, date, desc, link }) => {
    return `*• Nombre:* ${name}\n*• Categoria:* ${category}\n*• Fecha:* ${date}\n*• Descripción:* ${desc}\n*• Link:* ${link}`
  }).join`\n\n─────────────────\n\n`
  await m.reply(msg)
  //await m.reply(`${JSON.stringify(rr, null, 1)}`)
}

handler.help = ['mcpdl']
handler.tags = ['search']
handler.command = /^(mcpedl|mcpdl)$/i

module.exports = handler
