const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // const dbHelpers = require("../helpers/dbHelpers")(db);
  /* GET items listing. Homepage */
  router.get("/", function (req, res, next) {
    db.getItems().then((response) => {
      //console.log("response", response);
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
      //console.log("response", response);
      res.json({ items: response });
    });
  });

  // router.delete("/:id", function (req, res, next) {
  //   res.send({ text: "This delete items route!" });
  // });
  return router;
};
