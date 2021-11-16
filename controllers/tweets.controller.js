const Tweet = require("../database/models/Tweet");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await Tweet.find({});
    res.render("tweets/tweets-list", { tweets });
  } catch (error) {
    next(error);
  }
};

exports.tweetNew = (req, res, next) => {
  res.render("tweets/tweet-form");
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    const newTweet = new Tweet(body);
    await newTweet.save();
    res.redirect("/");
  } catch (error) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
