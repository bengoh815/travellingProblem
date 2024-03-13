import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).send("Hey users!");
};

export const postUsers = async (req: Request, res: Response) => {
  res.status(200).send("Hey users!");
};

export const getUserById = async (req: Request, res: Response) => {
  res.status(200).send("getUserById");
};
export const updateUser = async (req: Request, res: Response) => {
  res.status(200).send("updateUser");
};
export const deleteUser = async (req: Request, res: Response) => {
  res.status(200).send("deleteUser");
};
