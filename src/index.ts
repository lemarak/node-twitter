import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import path from "path";
import errorHandler from "errorhandler";
import dotenv from "dotenv";
dotenv.config();

import "./database";
import index from "./routes";

const app: Application = express();
const port: string | number = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

if (process.env.NODE_ENV === "developpment") {
  app.use(errorHandler());
} else {
  app.use((err: any, _: Request, res: Response) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? "Erreur 500" : err.message,
    });
  });
}

app.listen(port);
