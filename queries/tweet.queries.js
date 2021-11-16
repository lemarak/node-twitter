const Tweet = require("../database/models/Tweet");

exports.getTweets = () => {
  return Tweet.find({});
};

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};
