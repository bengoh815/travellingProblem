import express from "express";
import {
  getAllMemberships,
  createMembership,
  getMembershipById,
  updateMembership,
  deleteMembership,
} from "../controllers/membership.controller";
import { APIVersion } from "../utils/apiVersion";

const membershipRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
membershipRouter.get(`${v1}/membership`, getAllMemberships);
membershipRouter.post(`${v1}/membership`, createMembership);
membershipRouter.get(`${v1}/membership/:id`, getMembershipById);
membershipRouter.put(`${v1}/membership/:id`, updateMembership);
membershipRouter.delete(`${v1}/membership/:id`, deleteMembership);

export default membershipRouter;
