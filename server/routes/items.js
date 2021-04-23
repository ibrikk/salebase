const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET items listing */
  router.get("/", function (req, res, next) {
    db.getItems().then((response) => {
      res.json({ items: response });
    });
  });

  /* POST items listing. */
  router.post("/", function (req, res, next) {
    console.log(req)
    db.postItems(req.body).then((response) => {
      console.log("response", response);
      res.json({ items: response });
    });
  });

  router.put("/:id", function (req, res, next) {
    db.putItems(req.body).then((response) => {
      res.json({ items: response });
    });
  });

  return router;
};
