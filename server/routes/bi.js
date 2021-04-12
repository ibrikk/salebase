const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

module.exports = (db) => {
  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.send({
      text: 'This is the BI route!'
  });
    });
  return router;
};
