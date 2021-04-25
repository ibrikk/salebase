require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");


const PORT = process.env.PORT || 3002;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db");
const dataBase = new Pool(dbParams);
dataBase.connect((err) => console.log("Error while connecting to DB", err));
const dbHelpers = require("./helpers/dbHelpers")(dataBase);
console.log("db connection test", dbParams);
console.log("process env", process.env);
// const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const getInventoryAssignments = require("./routes/items-assign");
const biRouter = require("./routes/bi");
const biRouterNeighbourhoods = require("./routes/neighbourhoods");
const getVendors = require("./routes/vendors");

const app = express();
app.use(cors());
app.set("port", PORT);

// app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter(dbHelpers));
app.use("/items", itemsRouter(dbHelpers));
app.use("/items-assign", getInventoryAssignments(dbHelpers));
app.use("/bi", biRouter(dbHelpers));
app.use("/neighbourhoods", biRouterNeighbourhoods(dbHelpers));
app.use("/vendors", getVendors(dbHelpers));


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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
