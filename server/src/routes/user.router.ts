import express from "express";
import UserController from "../controllers/user.controller";
import { APIVersion } from "../utils/apiVersion";

const usersRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
usersRouter.get(`${v1}/users`, UserController.getAllUsers);
usersRouter.post(`${v1}/users`, UserController.createUser);
usersRouter.get(`${v1}/users/:id`, UserController.getUserById);
usersRouter.put(`${v1}/users/:id`, UserController.updateUser);
usersRouter.delete(`${v1}/users/:id`, UserController.deleteUser);

export default usersRouter;
