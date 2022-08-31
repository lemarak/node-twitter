const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const { app } = require("../app");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 3600 * 24 * 7,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/tweeter",
      ttl: 3600 * 24 * 7,
    }),
  })
);
