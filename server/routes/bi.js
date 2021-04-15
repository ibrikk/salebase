const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET home page. */
  router.get("/", function (req, res, next) {
    db.getTopItemsBI().then((response) => {
      console.log("response", response);
      res.json({ items: response });
    });
  });
  return router;
}



