const express = require('express');
const router = express.Router();

//see "./router.ctrl.js"
const ctrl = require("./router.ctrl");

router.get('/', ctrl.output.home);

//see "../../app.js"
module.exports = router;