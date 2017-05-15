var express = require('express');
var router = express.Router();
var data = require('../model/data');
var mongoose = require('mongoose');
/*
router.get('/', function (req, res, next) {
  res.render('index');
});
*/
router.get('/ajaxteam', function (req, res, next) {
  res.send(JSON.stringify({ Teamdaten: data.team }))
    ; /* JSON.stringify */
});

router.get('/', function (req, res, next) {                                                                       // 1b)
  mongoose.model('Data').find({}, function (err, data) {
    res.render('index', { 'data': data })
  });
});

module.exports = router;
