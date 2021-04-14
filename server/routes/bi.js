const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

module.exports = (db) => {
  /* GET home page. */
  router.get("/", function (req, res, next) {

    db.biTest().then((response) => {
      console.log("response", response);
      res.json({ items: response });
    });

  });
  return router;
};
