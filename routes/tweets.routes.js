const router = require("express").Router();
const {
  tweetList,
  tweetAdd,
  tweetCreate,
  tweetDelete,
  tweetEdit,
  tweetUpdate,
} = require("../controllers/tweets.controller");

router.get("/", tweetList);
router.get("/new", tweetAdd);
router.post("/", tweetCreate);
router.get("/edit/:tweetId", tweetEdit);
router.post("/update/:tweetId", tweetUpdate);
router.delete("/:tweetId", tweetDelete);

module.exports = router;
