let { MessageType, mentionedJid } = require("@adiwajshing/baileys")
let fs = require('fs')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, args, text, rtext, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.DATABASE._data.users[who]

    let healt = global.DATABASE._data.users[who].healt
    
    let armor = global.DATABASE._data.users[who].armor
    let ardurability = global.DATABASE._data.users[who].armordurability
    let sword = global.DATABASE._data.users[who].sword
    let sdurability = global.DATABASE._data.users[who].sworddurability
    let pickaxe = global.DATABASE._data.users[who].pickaxe
    let pdurability = global.DATABASE._data.users[who].pickaxedurability
    let axe = global.DATABASE._data.users[who].axe
    let adurability = global.DATABASE._data.users[who].axedurability
    let rod = global.DATABASE._data.users[who].rod
    let rdurability = global.DATABASE._data.users[who].roddurability
    
    //Minerales
    let diamond = global.DATABASE._data.users[who].diamond
    let gold = global.DATABASE._data.users[who].gold
    let iron = global.DATABASE._data.users[who].iron
    let stone = global.DATABASE._data.users[who].stone
    
    //Madera
    let wood = global.DATABASE._data.users[who].wood
    
    //Cultivos - frutas
    let strawberry = global.DATABASE._data.users[who].strawberry
    let watermelon = global.DATABASE._data.users[who].watermelon
    let grape = global.DATABASE._data.users[who].grape
    let kiwi = global.DATABASE._data.users[who].kiwi
    
    //Peces
    let blowfish = global.DATABASE._data.users[who].blowfish
    let tropicalfish = global.DATABASE._data.users[who].tropicalfish
    let commonfish = global.DATABASE._data.users[who].commonfish
    
    //Otros 
    let seed = global.DATABASE._data.users[who].seed
    let potion = global.DATABASE._data.users[who].potion
    let chest = global.DATABASE._data.users[who].chest
    let box = global.DATABASE._data.users[who].box
    let trash = global.DATABASE._data.users[who].trash

    let level = global.DATABASE._data.users[who].level
    let money = global.DATABASE._data.users[who].money
    let exp = global.DATABASE._data.users[who].exp
    
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
    let name = m.fromMe ? conn.user : conn.contacts[who]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let invt = fs.readFileSync('./storage/image/inventario.png')
    if (global.DATABASE._data.users[who] == undefined) return m.reply(`El usuɑrio no estά registrɑdo en lɑ bɑse de dɑtos!`)
    let items = (diamond + gold + iron + stone + wood + blowfish + tropicalfish + commonfish + potion + seed + trash)

    
    let _ardurability = Math.floor((ardurability * 100) / 5000)
    let _sdurability = Math.floor((sdurability * 100) / 5000)
    let _pdurability = Math.floor((pdurability * 100) / 5000)
    let _adurability = Math.floor((adurability * 100) / 5000)
    let _rdurability = Math.floor((rdurability * 100) / 5000)

    let inv = `*Inventario de @${who.split("@s.whatsapp.net")[0]}*

*❤ Vida:* ${healt}
*💵 Dinero:* ${shortNum(money)}
*⭐ Nivel:* ${level}
*✨ Exp:* ${exp}
*🆙️ Exp nivel:* ${user.exp - min}/${max}


*${armor == 5 ? '👕': '🎽'} Armadura de:* ${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'cuero' : '' || armor == 2 ? 'malla' : '' || armor == 3 ? 'hierro' : '' || armor == 4 ? 'oro' : '' || armor == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_ardurability}%

*🗡️ Espada de:* ${sword == 0 ? 'No tiene' : '' || sword == 1 ? 'madera' : '' || sword == 2 ? 'piedra' : '' || sword == 3 ? 'hierro' : '' || sword == 4 ? 'oro' : '' || sword == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_sdurability}%

*⛏️ Pico de:* ${pickaxe == 0 ? 'No tiene' : '' || pickaxe == 1 ? 'madera' : '' || pickaxe == 2 ? 'piedra' : '' || pickaxe == 3 ? 'hierro' : '' || pickaxe == 4 ? 'oro' : '' || pickaxe == 5 ? 'diamante': ''}
*🎗 Durabilidad:* ${_pdurability}%

*🪓 Hacha de:* ${axe == 0 ? 'No tiene' : '' || axe == 1 ? 'madera' : '' || axe == 2 ? 'piedra' : '' || axe == 3 ? 'hierro' : '' || axe == 4 ? 'oro' : '' || axe == 5 ? 'diamante' : ''}
*🎗 Durabilidad:* ${_adurability}%

*🎣 Caña:* ${rod == 0 ? 'No tiene' : '' || rod == 1 ? 'normal' : '' || rod == 2 ? 'Caña ????' : '' || rod == 3 ? 'Caña ????' : '' || rod == 4 ? 'Caña ????' : '' || rod == 5 ? 'Caña ????' : ''}
*🎗 Durabilidad:* ${_rdurability}%


\t\t\t\t*乂 I T E M S*

*Minerales*
*💎 Diamante:* ${diamond}
*🪙 Oro:* ${gold}
*🔩 Hierro:* ${iron}
*🪨 Piedra:* ${stone}

*Frutas*
*🍓 Fresa:* ${strawberry}
*🍉 Sandía:* ${watermelon}
*🍇 Uva:* ${grape}
*🥝 Kiwi:* ${kiwi}

*Peces*
*🐠 Tropical:* ${tropicalfish}
*🐡 Globo:* ${blowfish}
*🐟 Comun:* ${commonfish}

*Otros items*
*🪵 Madera:* ${wood}
*🧪 Poción:* ${potion}
*🌱 Semilla:* ${seed}
*📦 Caja:* ${box}
*🗑️ Basura:* ${trash}
*🧰 Cofre:* ${chest}

*🍱 Total inv:* ${shortNum(items)} items
`
m.reply(reText(inv))
    //let type = (args[0] || ' ').toLowerCase()

    //application/vnd.ms-excel
    //application/vnd.ms-powerpoint

//if (text.includes('simple')) { 
    //conn.sendMessage(m.chat, str, MessageType.text, { quoted: m, contextInfo: { mentionedJid: [who], forwardingScore: 750, isForwarded: true }})
    //} else {
    //let res = await conn.prepareMessageFromContent(m.chat, { "orderMessage": { "orderId":"6288215463787", "itemCount": `${diamond + gold + iron + stone + wood + blowfish + tropicalfish + commonfish + potion + seed + trash}`, "message": str, "orderTitle": "💌 Lobita & Gatito 💫", "footerText": "© lolibot", "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==", "thumbnail": invt, "surface": "CATALOG" } }, { quoted: m, contextInfo: { mentionedJid: [who] } })
    //conn.relayWAMessage(res)
    //}
}

handler.help = ['inventario']
handler.tags = ['rpg']
handler.command = /^(inventario|inventory|inv)$/i

handler.register = true

module.exports = handler


function reText(text) {
return text.replace(/a/g, 'ɑ')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}

function priceNum(num) {
return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num).replace('.00', '').replace(/,/g, '.')
}

