import express from "express";
import MembershipController from "../controllers/membership.controller";
import { APIVersion } from "../utils/apiVersion";
import { validateCreateMembership } from "../middleware/validation/membershipValidator";

const membershipsRouter = express.Router();

// Routes
membershipsRouter.post(
  `/`,
  validateCreateMembership,
  MembershipController.createMembership
);
membershipsRouter.get(`/`, MembershipController.getMembership);
membershipsRouter.put(`/:id`, MembershipController.updateMembership);
membershipsRouter.delete(`/:id`, MembershipController.deleteMembership);

export default membershipsRouter;
