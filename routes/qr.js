const express = require("express");

const qrReader = require("../controllers/qr");

const router = express.Router();

router.post("/read_qr", qrReader.readQr);

module.exports = router;
