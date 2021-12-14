import { Request, Response, NextFunction } from "express";

const {
  getTweets,
  getTweet,
  createTweet,
  deleteTweet,
  updateTweet,
} = require("../queries/tweet.queries");

export const tweetList = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweets = await getTweets();
    res.render("tweets/tweet", { tweets });
  } catch (error) {
    next(error);
  }
};

export const tweetNew = (_: Request, res: Response) => {
  res.render("tweets/tweet-form", { tweet: {} });
};

export const tweetCreate = async (req: Request, res: Response) => {
  try {
    await createTweet(req.body);
    res.redirect("/tweets");
  } catch (error: any) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    res.status(400).render("tweets/tweet-form", { errors });
  }
};

export const tweetDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweets();
    res.render("tweets/tweet-list", { tweets });
  } catch (error) {
    next(error);
  }
};

export const tweetEdit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweet(tweetId);
    res.render("tweets/tweet-form", { tweet });
  } catch (error) {
    next(error);
  }
};

export const tweetUpdate = async (req: Request, res: Response) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
  } catch (error: any) {
    const errors = Object.keys(error.errors).map(
      (key) => error.errors[key].message
    );
    const tweet = await getTweet(tweetId);
    res.status(400).render("tweets/tweet-form", { errors, tweet });
  }
};
