import express from "express";
import {
  getAllUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const usersRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
usersRouter.get(`${v1}/users`, getAllUsers);
usersRouter.post(`${v1}/users`, createUsers);
usersRouter.get(`${v1}/users/:id`, getUserById);
usersRouter.put(`${v1}/users/:id`, updateUser);
usersRouter.delete(`${v1}/users/:id`, deleteUser);

export default usersRouter;
