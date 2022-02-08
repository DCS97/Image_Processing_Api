import { NextFunction, Request, RequestHandler, Response } from "express";
import fs from "fs";
import { FOLDER_PATH_FULL_IMAGE } from "../constants";

const getImage: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fileName = req.query.fileName;
  const height = parseInt(req.query.height as string, 10);
  const width = parseInt(req.query.width as string, 10);
  const originalFile = `${FOLDER_PATH_FULL_IMAGE}/${fileName}.jpg`;

  if (!fileName || !height || !width) {
    return res
      .status(400)
      .send("url must contain filename and desired width & height");
  }

  fs.access(originalFile, (err) => {
    if (err) {
      console.log(err);
      return res.status(404).send("Could not access file, please try again.");
    } else {
      return res.status(200);
    }
  });
  next();
};

export default getImage;
