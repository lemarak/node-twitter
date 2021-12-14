import { Router, Response } from "express";
import tweets from "./tweets";

const router = Router();

router.use("/tweets", tweets);

router.get("/", (_, res: Response) => {
  res.redirect("/tweets");
});

export default router;
