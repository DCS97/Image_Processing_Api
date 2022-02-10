import express, { Request, Response } from 'express';
import getResizedImage from '../../middleware/getResizedImage';
import getImage from '../../middleware/getImage';

const imageRouter = express.Router();

imageRouter.get(
  '/',
  getImage,
  getResizedImage,
  (req: Request, res: Response): void => {
    console.log('Processing image...');
  }
);

export default imageRouter;
