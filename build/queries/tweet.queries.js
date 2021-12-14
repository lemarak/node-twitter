"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweet = exports.deleteTweet = exports.createTweet = exports.getTweet = exports.getTweets = void 0;
const Tweet_1 = require("../database/models/Tweet");
const getTweets = () => {
    return Tweet_1.Tweet.find({});
};
exports.getTweets = getTweets;
const getTweet = (tweetId) => {
    return Tweet_1.Tweet.findOne({ _id: tweetId });
};
exports.getTweet = getTweet;
const createTweet = (tweet) => {
    const newTweet = new Tweet_1.Tweet(tweet);
    return newTweet.save();
};
exports.createTweet = createTweet;
const deleteTweet = (tweetId) => {
    return Tweet_1.Tweet.findByIdAndDelete(tweetId);
};
exports.deleteTweet = deleteTweet;
const updateTweet = (tweetId, tweet) => {
    return Tweet_1.Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
};
exports.updateTweet = updateTweet;
//# sourceMappingURL=tweet.queries.js.map