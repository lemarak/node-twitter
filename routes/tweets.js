const router = require("express").Router();
const Tweet = require("../database/models/Tweet");
const {
  tweetList,
  tweetNew,
  tweetCreate,
} = require("../controllers/tweets.controller");

router.get("/", tweetList);

router.get("/new", tweetNew);

router.post("/", tweetCreate);

module.exports = router;
