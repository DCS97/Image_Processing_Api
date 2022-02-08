import express from "express";
import imageRouter from "./api/imageRouter";
import listImagesRouter from "./api/listImagesRouter";
const router = express.Router();

router.use("/chooseImage", imageRouter, (req, res) => {
  console.log("Please choose a image to process");
});

router.use("/listImages", listImagesRouter, (req, res) => {
  console.log("Here you can find the list of images available to process.");
});

export default router;
