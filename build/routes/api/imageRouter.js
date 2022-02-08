"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getResizedImage_1 = __importDefault(require("../../middleware/getResizedImage"));
const getImage_1 = __importDefault(require("../../middleware/getImage"));
const imageRouter = express_1.default.Router();
imageRouter.get("/", getImage_1.default, getResizedImage_1.default, (req, res) => {
    console.log("Processing image...");
});
exports.default = imageRouter;
