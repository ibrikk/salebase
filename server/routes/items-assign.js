const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.send("This is Items-Assign Router!");
  });

  /* POST home page. */
  router.post("/", function (req, res, next) {
    res.send("This is POST Items-Assign Router!");
  });
  return router;
};
