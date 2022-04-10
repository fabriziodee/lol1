//const uploadImage = require("../lib/uploadImage");
//const fetch = require("node-fetch");
const tesseract = require("node-tesseract-ocr");

let handler = async (m, { usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";
  if (!mime) throw 'Etiqueta una imagen que contenga un texto!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Imagen *${mime}* no soportado!`;
  let img = await q.download();
  //let url = await uploadImage(img);
  tesseract
    .recognize(img, {})
    .then((text) => {
      //console.log("Result:", text);
      m.reply(text);
    })
    .catch((error) => {
      console.log(error.message);
      throw error
    });
};

handler.help = ["ocr"];
handler.tags = ["tools"];
handler.command = /^(ocr|atexto|totext)$/i;

module.exports = handler;
