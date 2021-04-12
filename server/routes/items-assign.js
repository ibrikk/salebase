const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET all items that include both assigned and non assigned. FETCH */
  router.get("/", function (req, res, next) {
    res.send("This is Items-Assign Router!");
  });

  /* POST an assigned item. INJECT */
  router.post("/", function (req, res, next) {
    res.send({ text: "This is POST Items-Assign Router!" });
  });
  return router;
};
