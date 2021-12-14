"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetUpdate = exports.tweetEdit = exports.tweetDelete = exports.tweetCreate = exports.tweetNew = exports.tweetList = void 0;
const { getTweets, getTweet, createTweet, deleteTweet, updateTweet, } = require("../queries/tweet.queries");
const tweetList = async (_, res, next) => {
    try {
        const tweets = await getTweets();
        res.render("tweets/tweet", { tweets });
    }
    catch (error) {
        next(error);
    }
};
exports.tweetList = tweetList;
const tweetNew = (_, res) => {
    res.render("tweets/tweet-form", { tweet: {} });
};
exports.tweetNew = tweetNew;
const tweetCreate = async (req, res) => {
    try {
        await createTweet(req.body);
        res.redirect("/tweets");
    }
    catch (error) {
        const errors = Object.keys(error.errors).map((key) => error.errors[key].message);
        res.status(400).render("tweets/tweet-form", { errors });
    }
};
exports.tweetCreate = tweetCreate;
const tweetDelete = async (req, res, next) => {
    try {
        const tweetId = req.params.tweetId;
        await deleteTweet(tweetId);
        const tweets = await getTweets();
        res.render("tweets/tweet-list", { tweets });
    }
    catch (error) {
        next(error);
    }
};
exports.tweetDelete = tweetDelete;
const tweetEdit = async (req, res, next) => {
    try {
        const tweetId = req.params.tweetId;
        const tweet = await getTweet(tweetId);
        res.render("tweets/tweet-form", { tweet });
    }
    catch (error) {
        next(error);
    }
};
exports.tweetEdit = tweetEdit;
const tweetUpdate = async (req, res) => {
    const tweetId = req.params.tweetId;
    try {
        const body = req.body;
        await updateTweet(tweetId, body);
        res.redirect("/tweets");
    }
    catch (error) {
        const errors = Object.keys(error.errors).map((key) => error.errors[key].message);
        const tweet = await getTweet(tweetId);
        res.status(400).render("tweets/tweet-form", { errors, tweet });
    }
};
exports.tweetUpdate = tweetUpdate;
//# sourceMappingURL=tweets.controller.js.map