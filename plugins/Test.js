let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
await conn.reply('51940617554@s.whatsapp.net', `${JSON.stringify(m, null, 1)}`, m)
}

handler.customPrefix = /Como/
handler.command = new RegExp

module.exports = handler
