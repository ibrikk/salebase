const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

//get route
module.exports = (db) => {
  /* GET items listing. Homepage */
  router.get("/", function (req, res, next) {
    res.send({ text: "This is the Vendors route!" });
  });
  return router;
};
