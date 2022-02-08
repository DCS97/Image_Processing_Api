"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../../.."));
describe("GET /api/listImages", () => {
    it("responds with 200 if there are images in the full folder", () => {
        (0, supertest_1.default)(__1.default).get("/api/listImages").expect(200);
    });
    // it("responds with 500 if there are not images in the full folder", (): void => {
    //   request(app).get("/api/listImages").expect(500);
    // });
});
