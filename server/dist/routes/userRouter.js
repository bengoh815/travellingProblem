"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const usersRouter = express_1.default.Router();
// api/v1
// GET /api/v1/users
usersRouter.get("/v1/users", userController_1.getUsers);
// POST /api/v1/users
// GET /api/v1/users/:id
// PUT /api/v1/users/:id
// DELETE /api/v1/users/:id
exports.default = usersRouter;
