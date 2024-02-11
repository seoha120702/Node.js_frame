const express = require('express');
const app = express();

// view engine
app.set('views', './app/src/views');
app.set('view engine', 'ejs'/*(Now : ejs)*/);

//router
const router = require("./src/routes");
app.use('/', router);


//see './bin/www.js'
module.exports = app;