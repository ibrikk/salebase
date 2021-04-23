const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

module.exports = (db) => {
  /* GET items listing. Homepage */
  router.get("/", function (req, res, next) {
    db.getVendors().then((response) => {
      res.json({ vendors: response });
    });
  });
  return router;
};

