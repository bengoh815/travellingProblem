"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
const corsOptions = {
    origin: "*", // Allow only this origin
};
// Routes
app.get("/", (0, cors_1.default)(corsOptions), (req, res) => res.send("Hello world! alkjshflsdkjfhslfkjsdhflasdk"));
app.use("/api", userRouter_1.default);
exports.default = app;
