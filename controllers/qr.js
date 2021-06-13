const QrCode = require("qrcode-reader");
const Jimp = require("jimp");

const imageReader = async (file) => {
  let result = [];
  buffer = file.buffer;
  const img = await Jimp.read(buffer);
  const qr = new QrCode();

  const value = new Promise((resolve, reject) => {
    qr.callback = async (err, v) => (err != null ? reject(err) : resolve(v));
    qr.decode(img.bitmap);
  });
  value
    .then((v) => {
      result.push({ message: "success", text: v.result });
    })
    .catch((err) => {
      //console.log(err);
    });
  return result;
};

exports.readQr = async (req, res, next) => {
  var file = req.file;
  let data;
  imageReader(file)
    .then((r) => {
      console.log(r);
      if (r.length == 0) {
        r.push({ message: "Invalid QR code", text: "" });
      }
      return res.status(200).json({
        data: r,
        message: "QR scanned successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
