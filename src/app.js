const express = require('express');
const routes = require("./routes/index");
const errorHandler = require('./utils/errorHandler.js');
require('./bd/conexion.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use(errorHandler);

module.exports = app ;