import { NextFunction, Request, RequestHandler, Response } from "express";
import fs from "fs";
import { FOLDER_PATH_FULL_IMAGE, FOLDER_PATH_THUMB_IMAGE } from "../constants";
import imageResizer from "../utils/imageResizer";

const getResizedImage: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fileName = req.query.fileName;
  const height = parseInt(req.query.height as string, 10);
  const width = parseInt(req.query.width as string, 10);
  const outputFile = `${FOLDER_PATH_THUMB_IMAGE}/${fileName}_${height}_${width}.jpg`;
  const originalFile = `${FOLDER_PATH_FULL_IMAGE}/${fileName}.jpg`;

  fs.readFile(outputFile, (err, data) => {
    if (!err) {
      if (data) {
        const readStream = fs.createReadStream(outputFile);
        readStream.pipe(res);
        console.log("Image already processed");
      } else {
        imageResizer({ originalFile, height, width, outputFile }).then(() => {
          const readStream = fs.createReadStream(outputFile);
          readStream.pipe(res);
          console.log("Image successfuly processed");
        });
      }
    } else {
      imageResizer({ originalFile, height, width, outputFile }).then(() => {
        const readStream = fs.createReadStream(outputFile);
        readStream.pipe(res);
        console.log("Image successfuly processed");
      });
    }
  });
  next();
};

export default getResizedImage;
