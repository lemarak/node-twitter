"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const errorhandler_1 = __importDefault(require("errorhandler"));
require("dotenv/config");
require("./database");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use((0, morgan_1.default)("short"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
if (process.env.NODE_ENV === "developpment") {
    app.use((0, errorhandler_1.default)());
}
else {
    app.use((err, _, res) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? "Erreur 500" : err.message,
        });
    });
}
app.listen(port);
//# sourceMappingURL=index.js.map