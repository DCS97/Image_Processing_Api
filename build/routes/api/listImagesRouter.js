"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getList_1 = __importDefault(require("../../middleware/getList"));
const listImagesRouter = express_1.default.Router();
listImagesRouter.get("/", getList_1.default, (req, res) => {
    console.log("Images avaiable to process...");
});
exports.default = listImagesRouter;
