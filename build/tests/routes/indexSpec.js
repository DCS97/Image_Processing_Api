"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
const request = (0, supertest_1.default)(__1.default);
describe("Server Router", () => {
    it("returns a 200 if chooseImage route exists", () => {
        request.get("/chooseImage").expect(200);
    });
    it("returns a 200 if listImages route exists", () => {
        request.get("/listImages").expect(200);
    });
});
