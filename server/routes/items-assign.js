const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET all items that include both assigned and non assigned. FETCH */
  router.get("/", function (req, res, next) {
    db.joinedInventoryAssignments().then((response) => {
      console.log("hi");
      console.log("response", response);
      res.json({ items: response });
    });
  });

  /* POST an assigned item. INJECT */
  router.post("/", function (req, res, next) {
    db.postInventoryAssignments(req.body).then((response) => {
      res.json({ items: response });
    });
  });
  return router;
};
