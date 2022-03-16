let util = require('util')
let path = require('path')

let handler = async (m, { conn, command }) => {
let type = Object.keys(mek.message)[0]
let budy = (type === 'conversation') ? m.message.conversation : (type === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''

if (budy.includes('Test')) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}

}

//handler.customPrefix = /onichan|yamete|senpai/i
handler.command = new RegExp

handler.fail = null

module.exports = handler
