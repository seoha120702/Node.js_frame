const express = require('express');
const app = express();

//router
const router = require("./src/routes");
app.use('/', router);

app.use(express.static(`${__dirname}/src/public`));

//see './bin/www.js'
module.exports = app;