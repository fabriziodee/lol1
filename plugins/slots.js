let { MessageType } = require('@adiwajshing/baileys')

let num = /([0-9])$/i

let handler = async (m, { conn, text }) => {

    let __waktur = (new Date - conn.slot[m.chat].lastslot)
    let _waktur = (180000 - __waktur)
    let waktur = clockString(_waktur)

    if (!text) throw 'Ingrese la una cantidad de dinero!'
    if (isNaN(Number(text))) return m.reply(`La cantidad debe ser un número`)
    let money = text * 1
    if (isNaN(Number(money))) return m.reply(`La cantidad debe ser un número`)
    if (money == NaN) return m.reply(`La cantidad debe ser un número`)
    if (money == undefined) return m.reply(`La cantidad debe ser un número`)
    let _money = money / 2
    let jackpot = Math.ceil(money * 5)
    let win = Math.ceil(money * 2)
    if (money < 70) throw 'Minimo 70 de dinero'
    let users = global.DATABASE._data.users
    if (money > users[m.sender].money) throw 'Su dinero no es suficiente'
    conn.slot = conn.slot ? conn.slot : {}
    if (new Date - conn.slot[m.chat].lastslot > 180000) {
    conn.slot[m.chat] = { lastslot: new Date * 1 }
    let emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐","🍒","🥥","🍌"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        end = "";
        hasil = `*Ganaste x3!*\n+${jackpot} de Dinero`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].money += jackpot
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')

    } else if (a == b || a == c || b == c) {
        end = "";
        hasil = `*Ganaste x2!*\n+${win} de Dinero`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].money += win
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    } else {
        end = "";
        hasil = `*Suerte la próxima!*\n-${_money} de Dinero`;
        gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].money -= _money * 1
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    }
  } else m.reply(`Espere {waktur}`)
}

handler.help = ['slot']
handler.tags = ['game']
handler.command = /^(slot|girar)$/i

module.exports = handler
