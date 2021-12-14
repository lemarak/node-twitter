"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const tweetSchema = new Schema({
    content: {
        type: String,
        minlength: [1, "Le tweet est trop court"],
        maxlength: [140, "Le tweet est trop long"],
        required: [true, "Le contenu du tweet est obligatoire"],
    },
});
exports.Tweet = mongoose_1.default.model("tweets", tweetSchema);
//# sourceMappingURL=Tweet.js.map