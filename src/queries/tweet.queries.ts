import { Tweet } from "../database/models/Tweet";
import { ITweet } from "../interfaces/tweet.interface";

export const getTweets = () => {
  return Tweet.find({});
};

export const getTweet = (tweetId: string) => {
  return Tweet.findOne({ _id: tweetId });
};

export const createTweet = (tweet: ITweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};

export const deleteTweet = (tweetId: string) => {
  return Tweet.findByIdAndDelete(tweetId);
};

export const updateTweet = (tweetId: string, tweet: ITweet) => {
  return Tweet.findByIdAndUpdate(
    tweetId,
    { $set: tweet },
    { runValidators: true }
  );
};
