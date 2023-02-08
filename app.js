const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
app.use(express.static(""));

app.listen(4000, function () {
  console.log("server started at 4000");
});
