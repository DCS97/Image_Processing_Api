import { NextFunction, Request, RequestHandler, Response } from 'express';
import fs from 'fs';
import { FOLDER_PATH_FULL_IMAGE } from '../constants';

const getList: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  fs.readdir(FOLDER_PATH_FULL_IMAGE, (err, data) => {
    if (err) {
      return res.status(500).send('Error occured reading the images');
    } else {
      if (data) {
        return res.status(200).send(data);
      } else {
        return res.status(500).send('There are no images in the folder');
      }
    }
  });
  next();
};

export default getList;
