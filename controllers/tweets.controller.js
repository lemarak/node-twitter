const {
  getTweets,
  createTweet,
  deleteTweet,
  getTweet,
  updateTweet,
} = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getTweets();
    res.status(200).render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};

exports.tweetAdd = (req, res, next) => {
  try {
    res.render("tweets/tweet-form", {
      tweet: {},
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};

exports.tweetCreate = async (req, res) => {
  try {
    const body = req.body;
    await createTweet({ ...body, auth: req.user._id });
    res.redirect("/tweets");
  } catch (error) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    res.render("tweets/tweet-form", { errors, tweet: req.body });
  }
};

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweet(tweetId);
    res.render("tweets/tweet-form", {
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {
    next(error);
  }
};

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    //
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
  } catch (error) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    const tweet = await getTweet(tweetId);
    res.render("tweets/tweet-form", {
      errors,
      tweet: { ...req.body, _id: tweetId },
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweets();
    res.render("tweets/tweet-list", {
      tweets,
    });
  } catch (error) {
    next(error);
  }
};
