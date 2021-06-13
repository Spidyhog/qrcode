const express = require("express");
const multer = require("multer");
const path = require("path");

const qrRoutes = require("./routes/qr");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Acess-Control-Allow-Methods", "*");
  res.setHeader("Aceess-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const upload = multer().single("qr");

app.use("/api", upload, qrRoutes);

app.listen(process.env.PORT || 5000);
