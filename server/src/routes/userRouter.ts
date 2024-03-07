import express from "express";
import { getUsers, postUsers } from "../controllers/userController";

const usersRouter = express.Router();

// api/v1
// GET /api/v1/users
usersRouter.get("/v1/users", getUsers);

// POST /api/v1/users
usersRouter.get("/v1/users", postUsers);
// GET /api/v1/users/:id
// PUT /api/v1/users/:id
// DELETE /api/v1/users/:id

export default usersRouter;
