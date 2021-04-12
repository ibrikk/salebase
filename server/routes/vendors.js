const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

//get route
module.exports = (db) => {
  /* GET items listing. Homepage */
  router.get("/", function (req, res, next) {
    db.getVendors().then((response) => {
      console.log("response", response);
      res.json({ vendors: response });
    });
  });
  return router;
};

