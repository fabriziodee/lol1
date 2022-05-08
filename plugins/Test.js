let { MessageType } = require('@adiwajshing/baileys')
let util = require('util')
let path = require('path')
let fs = require("fs")
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
let giftest = fs.readFileSync('./storage/gif/Shop.gif')
let out = '../storage/gif/Shop.gif'
conn.sendFile(m.chat, out, 'out.gif', '*Se convirtió a GIF*', m, 0, { mimetype: 'video/gif' })
//conn.sendMessage(m.chat, giftest, MessageType.video, { mimetype: 'video/gif', filename: 'stick.gif', quoted: m, caption: 'Test' })    
//conn.sendMessage(m.chat, giftest, MessageType.video, { mimetype: 'video/mp4', filename: 'stick.gif', quoted: m, caption: 'Test' })
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler
