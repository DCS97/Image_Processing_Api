"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageRouter_1 = __importDefault(require("./api/imageRouter"));
const listImagesRouter_1 = __importDefault(require("./api/listImagesRouter"));
const router = express_1.default.Router();
router.use("/chooseImage", imageRouter_1.default, (req, res) => {
    console.log("Please choose a image to process");
});
router.use("/listImages", listImagesRouter_1.default, (req, res) => {
    console.log("Here you can find the list of images available to process.");
});
exports.default = router;
