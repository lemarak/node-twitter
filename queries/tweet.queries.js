const Tweet = require("../database/models/Tweet");

exports.getTweets = () => {
  return Tweet.find({});
};

exports.getTweet = (tweetId) => {
  return Tweet.findOne({ _id: tweetId });
};

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId);
};

exports.updateTweet = (tweetId, tweet) => {
  return Tweet.findByIdAndUpdate(tweetId, { $set: tweet });
};
