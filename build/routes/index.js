"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweets_1 = __importDefault(require("./tweets"));
const router = (0, express_1.Router)();
router.use("/tweets", tweets_1.default);
router.get("/", (_, res) => {
    res.redirect("/tweets");
});
exports.default = router;
//# sourceMappingURL=index.js.map