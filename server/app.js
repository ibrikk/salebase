require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./lib/db");
const PORT = process.env.PORT || 3001;
const dbHelpers = require("./helpers/dbHelpers")(db);

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db");
const dataBase = new Pool(dbParams);
dataBase.connect((err) => console.log("connected", err));

const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const itemsAssignRouter = require("./routes/items-assign");
const biRouter = require("./routes/bi");

const app = express();
// const port = normalizePort(process.env.PORT || "3001");
app.set("port", PORT);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter(dbHelpers));
app.use("/items", itemsRouter(dbHelpers));
app.use("/items-assign", itemsAssignRouter(dbHelpers));
app.use("/bi", biRouter(dbHelpers));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
