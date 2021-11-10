const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("tweets/tweets-list");
});

module.exports = router;
