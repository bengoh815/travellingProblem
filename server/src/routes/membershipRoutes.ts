import express from "express";
import {
  getAllMemberships,
  createMembership,
  getMembershipById,
  updateMembership,
  deleteMembership,
} from "../controllers/membershipController";

const membershipRouter = express.Router();

// API version prefix
const v1 = "/api/v1";

// Routes
membershipRouter.get(`${v1}/membership`, getAllMemberships);
membershipRouter.post(`${v1}/membership`, createMembership);
membershipRouter.get(`${v1}/membership/:id`, getMembershipById);
membershipRouter.put(`${v1}/membership/:id`, updateMembership);
membershipRouter.delete(`${v1}/membership/:id`, deleteMembership);

export default membershipRouter;
