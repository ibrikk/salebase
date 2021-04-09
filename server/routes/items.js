const express = require('express');
const router = express.Router();

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.send('This is the Items route!');
});

module.exports = router;

