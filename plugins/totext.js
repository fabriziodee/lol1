const audio2text = require('audio2text');
const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
const params = {
    url: media,
    runningLength:'short'
}
audio2text.recognize(params).then(transcript => {
	console.log(transcript)
});
            })
        } else throw `Responda a una nota de voz o audio`
    } catch (e) {
        throw e
    }
}

handler.help = ['atexto']
handler.tags = ['fun']
handler.command = /^(atext|atexto|totext|totexto)$/i

module.exports = handler


const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
