import express, { Request, Response } from "express";
import getList from "../../middleware/getList";

const listImagesRouter = express.Router();

listImagesRouter.get("/", getList, (req: Request, res: Response): void => {
  console.log("Images avaiable to process...");
});

export default listImagesRouter;
