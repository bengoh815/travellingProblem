import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { APIVersion } from "../utils/apiVersion";

const usersRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
usersRouter.get(`${v1}/users`, getAllUsers);
usersRouter.post(`${v1}/users`, createUser);
usersRouter.get(`${v1}/users/:id`, getUserById);
usersRouter.put(`${v1}/users/:id`, updateUser);
usersRouter.delete(`${v1}/users/:id`, deleteUser);

export default usersRouter;
