let util = require('util')
let path = require('path')

let handler = m => m

handler.before = async function (m, { conn, command }) {
if ((m.isBaileys && m.fromMe) || m.fromMe ) return true

let audio1A = /onichan|senpai|sempai|yamete/i
let audio1B = audio1A.exec(m.text)

let audio2A = /xxx/i
let audio2B = audio2A.exec(m.text)

let audio3A = /xxx/i
let audio3B = audio3A.exec(m.text)

let audio4A = /xxx/i
let audio4B = audio4A.exec(m.text)

let audio5A = /xxx/i
let audio5B = audio5A.exec(m.text)

let audio6A = /xxx/i
let audio6B = audio6A.exec(m.text)

let audio7A = /xxx/i
let audio7B = audio7A.exec(m.text)

let audio8A = /xxx/i
let audio8B = audio8A.exec(m.text)

let audio9A = /xxx/i
let audio9B = audio9A.exec(m.text)

let audio10A = /xxx/i
let audio10B = audio10A.exec(m.text)

let audio11A = /xxx/i
let audio11B = audio11A.exec(m.text)

let audio12A = /xxx/i
let audio12B = audio12A.exec(m.text)

let audio13A = /xxx/i
let audio13B = audio13A.exec(m.text)

let audio14A = /xxx/i
let audio14B = audio14A.exec(m.text)



if (audio1B) {
	let vn = './storage/audio/Yamete_onii_chan.mp3'
	conn.sendFile(m.chat, vn, 'Yamete_onii_chan.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio2B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio3B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio4B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio5B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio6B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio7B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio8B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio9B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio10B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio11B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio12B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio13B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}

if (audio14B) {
	let vn = 'xxx'
	conn.sendFile(m.chat, vn, 'xxx', null, m, true, { type: 'audioMessage', ptt: true })
	}



}

module.exports = handler
