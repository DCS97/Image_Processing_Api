"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
const imageResizer_1 = __importDefault(require("../utils/imageResizer"));
const getResizedImage = (req, res, next) => {
    const fileName = req.query.fileName;
    const height = parseInt(req.query.height, 10);
    const width = parseInt(req.query.width, 10);
    const outputFile = `${constants_1.FOLDER_PATH_THUMB_IMAGE}/${fileName}_${height}_${width}.jpg`;
    const originalFile = `${constants_1.FOLDER_PATH_FULL_IMAGE}/${fileName}.jpg`;
    fs_1.default.readFile(outputFile, (err, data) => {
        if (!err) {
            if (data) {
                const readStream = fs_1.default.createReadStream(outputFile);
                readStream.pipe(res);
                console.log("Image already processed");
            }
            else {
                (0, imageResizer_1.default)({ originalFile, height, width, outputFile }).then(() => {
                    const readStream = fs_1.default.createReadStream(outputFile);
                    readStream.pipe(res);
                    console.log("Image successfuly processed");
                });
            }
        }
        else {
            (0, imageResizer_1.default)({ originalFile, height, width, outputFile }).then(() => {
                const readStream = fs_1.default.createReadStream(outputFile);
                readStream.pipe(res);
                console.log("Image successfuly processed");
            });
        }
    });
    next();
};
exports.default = getResizedImage;
