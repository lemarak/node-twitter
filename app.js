const express = require("express");
const path = require("path");
const morgan = require("morgan");
const errorHandler = require("errorhandler");

const indexRoutes = require("./routes");
require("dotenv").config();
require("./database");

const app = express();
exports.app = app;
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    res.status(err.code || 500).json({
      code: err.code || 500,
      message: err.message,
    });
  });
}

app.get("*", (req, res) => {
  res.send("Non trouvé");
});

app.listen(PORT);
