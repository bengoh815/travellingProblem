import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
  res.status(200).send("Hey users!");
};

export const postUsers = async (req: Request, res: Response) => {
  res.status(200).send("Hey users!");
};
