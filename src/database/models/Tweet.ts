import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  content: {
    type: String,
    minlength: [1, "Le tweet est trop court"],
    maxlength: [140, "Le tweet est trop long"],
    required: [true, "Le contenu du tweet est obligatoire"],
  },
});

export const Tweet = mongoose.model("tweets", tweetSchema);
