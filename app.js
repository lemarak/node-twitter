const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const index = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.get("/", (req, res) => {
  res.send("Coucou");
});

app.listen(PORT);
