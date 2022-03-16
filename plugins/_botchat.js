let util = require('util')
let path = require('path')

let handler = m => m

handler.before = async function (m, { conn, command }) {

if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
let test = /Test/i
let ttest = test.exec(m.text)
if (ttest) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}

}

module.exports = handler
