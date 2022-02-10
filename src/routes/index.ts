import express, { Request, Router } from 'express';
import imageRouter from './api/imageRouter';
import listImagesRouter from './api/listImagesRouter';

const router: Router = express.Router();

router.use('/chooseImage', imageRouter, (): void => {
  console.log('Please choose a image to process');
});

router.use('/listImages', listImagesRouter, () => {
  console.log('Here you can find the list of images available to process.');
});

export default router;
