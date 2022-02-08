"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
const getImage = (req, res, next) => {
    const fileName = req.query.fileName;
    const height = parseInt(req.query.height, 10);
    const width = parseInt(req.query.width, 10);
    const originalFile = `${constants_1.FOLDER_PATH_FULL_IMAGE}/${fileName}.jpg`;
    if (!fileName || !height || !width) {
        return res
            .status(400)
            .send("url must contain filename and desired width & height");
    }
    fs_1.default.access(originalFile, (err) => {
        if (err) {
            console.log(err);
            return res.status(404).send("Could not access file, please try again.");
        }
        else {
            return res.status(200);
        }
    });
    next();
};
exports.default = getImage;
