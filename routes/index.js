const router = require("express").Router();
const api = require("./api");
const Tweet = require("../database/models/Tweet");

router.use("/api", api);

router.get("/", (req, res) => {
  Tweet.find({})
    .exec()
    .then((tweets) => {
      res.render("tweets/tweets-list", { tweets });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});
module.exports = router;
