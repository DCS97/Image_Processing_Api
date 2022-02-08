"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constants_1 = require("../constants");
const getList = (req, res, next) => {
    fs_1.default.readdir(constants_1.FOLDER_PATH_FULL_IMAGE, (err, data) => {
        if (err) {
            return res.status(500).send("Error occured reading the images");
        }
        else {
            if (data) {
                return res.status(200).send(data);
            }
            else {
                return res.status(500).send("There are no images in the folder");
            }
        }
    });
    next();
};
exports.default = getList;
