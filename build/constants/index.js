"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOLDER_PATH_THUMB_IMAGE = exports.FOLDER_PATH_FULL_IMAGE = void 0;
const path_1 = __importDefault(require("path"));
exports.FOLDER_PATH_FULL_IMAGE = `${path_1.default.resolve(__dirname, "../../Images/full")}`;
exports.FOLDER_PATH_THUMB_IMAGE = `${path_1.default.resolve(__dirname, "../../Images/thumb")}`;
