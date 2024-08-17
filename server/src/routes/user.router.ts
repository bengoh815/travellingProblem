import express from "express";
import UserController from "../controllers/user.controller";

const usersRouter = express.Router();

// Routes
usersRouter.get(`/`, UserController.getAllUsers);
usersRouter.post(`/`, UserController.createUser);
usersRouter.get(`/:id`, UserController.getUserById);
usersRouter.put(`/:id`, UserController.updateUser);
usersRouter.delete(`/:id`, UserController.deleteUser);

export default usersRouter;
