import { GroupRoles } from "../models/group.model";
import { UserRoles } from "../models/user.model";

/**
 * Global User section
 */
const BaseUserRolePermissions: Record<UserRoles, AppPermissions[]> = {
  [UserRoles.User]: [
    UserPermissions.ReadOwnAccount,
    UserPermissions.ReadAnyAccount,
    UserPermissions.UpdateOwnAccount,
    UserPermissions.DeleteOwnAccount,
    MembershipPermissions.ReadMemberships,
    MembershipPermissions.CreateMemberships,
    MembershipPermissions.UpdateOwnMemberships,
    MembershipPermissions.DeleteOwnMemberships,
  ],
  [UserRoles.Admin]: [],
  [UserRoles.SuperAdmin]: [],
};

// Inheritance modifications for User Admin
BaseUserRolePermissions[UserRoles.Admin] = [
  ...BaseUserRolePermissions[UserRoles.User],
  UserPermissions.UpdateAnyAccount,
  UserPermissions.DeleteAnyAccount,
  GroupPermissions.CreateGroups,
];

// Inheritance modifications for User SuperAdmin
BaseUserRolePermissions[UserRoles.SuperAdmin] = [
  ...BaseUserRolePermissions[UserRoles.Admin],
];

/**
 * Group section
 */

const BaseGroupRolePermissions: Record<GroupRoles, AppPermissions[]> = {
  [GroupRoles.Member]: [
    ApplicationPermisssions.ReadOwnApplications,
    ApplicationPermisssions.CreateApplications,
    ApplicationPermisssions.UpdateOwnApplications,
    ApplicationPermisssions.DeleteOwnApplications,
    GroupPermissions.ReadGroups,
    EventPermissions.ReadEvents,
    ParticipationPermissions.ReadParticipations,
    ParticipationPermissions.CreateOwnParticipations,
    ParticipationPermissions.UpdateOwnParticipations,
    ParticipationPermissions.DeleteOwnParticipations,
    RidePermissions.ReadRides,
  ],
  [GroupRoles.Driver]: [],
  [GroupRoles.Moderator]: [],
  [GroupRoles.Admin]: [],
};

// Inheritance modifications for Group Driver
BaseGroupRolePermissions[GroupRoles.Driver] = [
  ...BaseGroupRolePermissions[GroupRoles.Member],
  RidePermissions.UpdateRides,
];

// Inheritance modifications for Group Moderator
BaseGroupRolePermissions[GroupRoles.Moderator] = [
  ...BaseGroupRolePermissions[GroupRoles.Driver],
  RidePermissions.CreateRides,
  RidePermissions.DeleteRides,
  MembershipPermissions.UpdateAnyMemberships,
  MembershipPermissions.DeleteAnyMemberships,
  EventPermissions.CreateEvents,
  EventPermissions.UpdateEvents,
  EventPermissions.DeleteEvents,
  ParticipationPermissions.CreateAnyParticipations,
  ParticipationPermissions.UpdateAnyParticipations,
  ParticipationPermissions.DeleteAnyParticipations,
];

// Inheritance modifications for Group Admin
BaseGroupRolePermissions[GroupRoles.Admin] = [
  ...BaseGroupRolePermissions[GroupRoles.Moderator],
  GroupPermissions.UpdateGroup,
  GroupPermissions.DeleteGroups,
  ApplicationPermisssions.ReadAnyApplications,
  ApplicationPermisssions.UpdateAnyApplications,
  ApplicationPermisssions.ReadAnyApplications,
  ApplicationPermisssions.UpdateAnyApplications,
  ApplicationPermisssions.DeleteAnyApplications,
];
