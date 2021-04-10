const express = require("express");
const router = express.Router();
const dbHelpers = require("../helpers/dbHelpers");

/* GET items listing. Homepage */
router.get("/", function (req, res, next) {
  res.send(getItems());
});

/* GET items listing. */
router.post("/", function (req, res, next) {
  res.send("This post items route!");
});

router.put("/:id", function (req, res, next) {
  res.send("This put items route!");
});

router.delete("/:id", function (req, res, next) {
  res.send("This delete items route!");
});

module.exports = router;
