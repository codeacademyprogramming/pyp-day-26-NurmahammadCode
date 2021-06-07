const express = require("express");
const app = express();

const reservations = require("./reservations");

app.use("/reservations", reservations);

module.exports = app;
