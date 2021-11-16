const { getTweets, createTweet } = require("../queries/tweet.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getTweets();
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
    await createTweet(req.body);
    res.redirect("/tweets");
  } catch (error) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
