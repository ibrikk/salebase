const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/neighbourhoods", function (req, res, next) {
    db.getTopNeighborhood().then((response) => {
      console.log("response", response);
      res.json({ items: response });
    });
  });
  return router;
};
