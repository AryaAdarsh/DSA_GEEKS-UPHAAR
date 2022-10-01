var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var {run} = require("../db/connfetch")

router.get('/', function(req, res, next) {
  res.render('PageB');
});
//run();
module.exports = router;
