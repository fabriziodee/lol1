let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `*Ingrese en nombre de un archivo plugin*\n\n- Ejemplo: ${usedPrefix + command} menu`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(require('fs').readFileSync('./plugins/' + text + '.js', 'utf-8'))
}

handler.help = ['getplugin']
handler.tags = ['owner']
handler.command = /^(getplugin)$/i

handler.rowner = true 

module.exports = handler
