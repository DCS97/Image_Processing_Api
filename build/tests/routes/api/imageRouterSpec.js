"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const __1 = __importDefault(require("../../.."));
const constants_1 = require("../../../constants");
describe("GET /api/chooseImage", () => {
    it("responds with 200 if called correctly and image exist", () => {
        (0, supertest_1.default)(__1.default)
            .get("/api/chooseImage?fileName=fjord&height=100&width=100")
            .expect(200);
    });
    it("responds with 400 if called without parameters", () => {
        (0, supertest_1.default)(__1.default).get("/api/chooseImage").expect(400);
    });
    it("responds with 400 if called with a missing parameter", () => {
        (0, supertest_1.default)(__1.default).get("/api/chooseImage?fileName=fjord&height=100").expect(400);
    });
    it("responds with 404 if called correctly but image does not exist", () => {
        (0, supertest_1.default)(__1.default)
            .get("/api/chooseImage?fileName=test&height=100&width=100")
            .expect(404);
    });
    it("creates a resized version of the original image", () => {
        (0, supertest_1.default)(__1.default)
            .get("/api/chooseImage?fileName=fjord&height=100&width=100")
            .then(() => {
            promises_1.default.stat(path_1.default.resolve(__dirname, `${constants_1.FOLDER_PATH_THUMB_IMAGE}/fjord_100_100.jpg`)).then((fileStat) => expect(fileStat).not.toBeNull());
        });
    });
    it("resizes the image according to the dimensions in the query", () => {
        (0, supertest_1.default)(__1.default)
            .get("/api/chooseImage?fileName=fjord&height=100&width=100")
            .then(() => {
            const img = require(`${constants_1.FOLDER_PATH_THUMB_IMAGE}/fjord_100_100.jpg`);
            expect(img.height).toBe(100);
            expect(img.width).toBe(100);
        })
            .catch(() => null);
    });
});
