const express = require("express");

const qrReader = require("../controllers/qr");

const router = express.Router();

router.post("/read_qr", qrReader.readQr);

router.get("/test", (res) => {
  res.status(200).json({
    message: "TEST",
  });
});

module.exports = router;
