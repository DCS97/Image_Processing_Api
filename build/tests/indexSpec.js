"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../"));
const request = (0, supertest_1.default)(__1.default);
describe("Server EntryPoints", () => {
    it("returns a 200 if entrypoint exists", () => {
        request.get("/").expect(200);
    });
    it("it returns a 404 if no route is selected", () => {
        request.get("/api").expect(404);
    });
});
