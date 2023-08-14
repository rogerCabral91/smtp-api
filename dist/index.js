"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const send_1 = __importDefault(require("./send"));
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT, 10) || 3000;
app.get("/", (_req, res) => {
    return res.send("Nodemailer Express API Typescript on Vercel");
});
app.get("/ping", (_req, res) => {
    return res.send("pong 🏓");
});
app.post("/send", (0, body_parser_1.json)(), (req, res) => {
    (0, send_1.default)(req, res);
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map