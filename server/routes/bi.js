const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is the Business Intelligence Router!');
});

module.exports = router;
