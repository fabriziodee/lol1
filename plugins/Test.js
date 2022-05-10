let { MessageType, Mimetype } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let fs = require("fs")
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
let tt = 150000
m.reply(`${shortNum(tt)}`)
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler

function shortNum(num) {
(num).toLocaleString('es-US', { style: 'currency', currency: 'USD', }).replace(/,/g, '.')
//return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
