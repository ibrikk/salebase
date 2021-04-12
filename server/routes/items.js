const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // const dbHelpers = require("../helpers/dbHelpers")(db);
  /* GET items listing. Homepage */
  router.get("/", function (req, res, next) {
    db.getItems().then((response) => {
      console.log("response", response);
      res.json({ items: response });
    });
  });

  /* GET items listing. */
  router.post("/", function (req, res, next) {
    res.send({ text: "This post items route!" });
  });

  router.put("/:id", function (req, res, next) {
    res.send({ text: "This put items route!" });
  });

  router.delete("/:id", function (req, res, next) {
    res.send({ text: "This delete items route!" });
  });
  return router;
};
