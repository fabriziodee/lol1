let fs = require ('fs')

let handler  = async (m, { conn, text, participants }) => {
  let teks = m.quoted ? m.quoted : m.quoted
  if (!text) throw 'Ingrese el mensaje para buscar en este grupo!'
  let v = await conn.searchMessages(text, m.chat, 10, 1);
  let s = v.messages;
  let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          m.reply(`✅ ${el.length} Mensajes encontrados`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await conn.sendMessage(m.chat, "🔍 Mensaje", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          m.reply("Mensaje no encontrado!");
        }
}

handler.help = ['buscarmsg']
handler.tags = ['group']
handler.command = /^(buscarmensaje|buscarmsg|searchmsg)$/i
handler.group = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

