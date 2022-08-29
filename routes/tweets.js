const router = require("express").Router();
const Tweet = require("../database/models/tweet.model");

router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

router.get("/", (req, res) => {
  Tweet.find({})
    .exec()
    .then((tweets) => res.render("tweets/tweet-list", { tweets }));
});

router.post("/", (req, res) => {
  const body = req.body;
  const newTweet = new Tweet(body);
  newTweet
    .save()
    .then((newTweet) => res.redirect("/"))
    .catch((err) => {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.render("tweets/tweet-form", { errors });
    });
});

module.exports = router;
