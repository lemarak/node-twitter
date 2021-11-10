const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    minlength: [1, "Le tweet est trop court"],
    maxlength: [140, "Le tweet est trop long"],
    required: [true, "Le contenu du tweet est obligatoire"],
  },
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
