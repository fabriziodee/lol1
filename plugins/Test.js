/*let { spawn } = require('child_process')
let fetch = require('node-fetch')
let fs = require('fs')
let { MessageType, mentionedJid } = require("@adiwajshing/baileys");

let handler = async function (m, { conn, text, participants }) {
      let lvlnow = '7'
      let teks = 'Test'
      let str = '*By Imagemagick*'
      if (global.support.convert || global.support.magick || global.support.gm) {
        let fontLevel = 'storage/font/level_c.otf'
        let fontTexts = 'storage/font/texts.otf'
        let xtsx = 'storage/image/fondo.jpeg'
        let bufs = []
        let anotations = '+1385+260'
        if (lvlnow > 2) anotations = '+1370+260'
        if (lvlnow > 10) anotations = '+1330+260'
        if (lvlnow > 50) anotations = '+1310+260'
        if (lvlnow > 100) anotations = '+1260+260'
       
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
          'convert',
          xtsx,
          '-font',
          fontTexts,
          '-fill',
          '#0F3E6A',
          '-size',
          '1024x784',
          '-pointsize',
          '68',
          '-interline-spacing',
          '-7.5',
          '-annotate',
          '+153+200',
          teks,
          '-font',
          fontLevel,
          '-fill',
          '#0A2A48',
          '-size',
          '1024x784',
          '-pointsize',
          '140',
          '-interline-spacing',
          '-1.2',
          '-annotate',
          anotations,
          lvlnow,
          '-append',
          'jpg:-'
        ]
        spawn(_spawnprocess, _spawnargs)
          .on('error', e => {
            throw e
          })
          .on('close', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'result.jpg', str, m)
          })
          .stdout.on('data', chunk => bufs.push(chunk))

      } else {
        m.reply(str)
      }
}

handler.command = /^(test)$/i
handler.owner = true

module.exports = handler*/



let handler = m => m

handler.before = async function (m, { text, command, usedPrefix, isCmd }) {
  if (!m.isBaileys && !m.fromMe) return false
  m.reply(m.text)
}

module.exports = handler

