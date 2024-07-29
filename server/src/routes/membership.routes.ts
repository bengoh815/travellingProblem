import express from "express";
import MembershipController from "../controllers/membership.controller";
import { APIVersion } from "../utils/apiVersion";
import { validateCreateMembership } from "../middleware/validation/membershipValidator";

const membershipRouter = express.Router();

// API version prefix
const v1 = APIVersion.v1;

// Routes
membershipRouter.get(
  `${v1}/memberships`,
  MembershipController.getAllMemberships
);
membershipRouter.post(
  `${v1}/memberships`,
  validateCreateMembership,
  MembershipController.createMembership
);
membershipRouter.get(
  `${v1}/memberships/:id`,
  MembershipController.getMembershipById
);
membershipRouter.put(
  `${v1}/memberships/:id`,
  MembershipController.updateMembership
);
membershipRouter.delete(
  `${v1}/memberships/:id`,
  MembershipController.deleteMembership
);

export default membershipRouter;
