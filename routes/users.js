const express = require('express');
const router = express.Router();

/* GET items listing. */
router.get('/items', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
