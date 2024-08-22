import { MembershipRoles } from "../models/membership.model";
import { UserRoles } from "../models/user.model";

/**
 * Global User section
 */
enum UserPermissions {
  // Global Users
  ReadOwnAccount = "read_own_account",
  ReadAnyAccount = "read_any_account",
  UpdateOwnAccount = "update_own_account",
  UpdateAnyAccount = "update_any_account",
  DeleteOwnAccount = "delete_own_account",
  CreateUserAccounts = "create_user_accounts",
  DeactivateOrDeleteAnyAccount = "deactivate_or_delete_any_account",
  // Groups
  CreateGroups = "create_groups",
  ReadAllGroups = "read_all_groups",
  UpdateGroupSettings = "update_group_settings",
  DeleteGroups = "delete_groups",
  ManageMembershipsAndRoles = "manage_memberships_and_roles",
  // Applications
  CreateApplications = "create_applications",
  ReadAllApplications = "read_all_applications",
  ApproveRejectUpdateApplications = "approve_reject_update_applications",
  DeleteApplications = "delete_applications",
  // Membership
  AssignUsersToGroupsOrRoles = "assign_users_to_groups_or_roles",
  ReadAllMemberships = "read_all_memberships",
  UpdateMembershipsAndRoles = "update_memberships_and_roles",
  RemoveUsersFromGroups = "remove_users_from_groups",
  // Event
  CreateEvents = "create_events",
  ReadAllEvents = "read_all_events",
  UpdateEventDetails = "update_event_details",
  CancelOrDeleteEvents = "cancel_or_delete_events",
  // Ride
  CreateRides = "create_rides",
  ReadAllRides = "read_all_rides",
  UpdateRideDetails = "update_ride_details",
  CancelOrDeleteRides = "cancel_or_delete_rides",
  // Participation
  JoinEventsOrRides = "join_events_or_rides",
  ReadParticipationRecords = "read_participation_records",
  UpdateParticipationStatus = "update_participation_status",
  RemoveParticipants = "remove_participants",
}

// Role-Permissions Mapping
export const UserRolePermissions: Record<UserRoles, UserPermissions[]> = {
  [UserRoles.User]: [
    UserPermissions.ReadOwnAccount,
    UserPermissions.UpdateOwnAccount,
    UserPermissions.DeleteOwnAccount,
  ],
  [UserRoles.Admin]: [
    UserPermissions.CreateUserAccounts,
    UserPermissions.ReadAnyAccount,
    UserPermissions.UpdateAnyAccount,
    UserPermissions.DeactivateOrDeleteAnyAccount,
  ],
  [UserRoles.SuperAdmin]: [
    UserPermissions.CreateUserAccounts,
    UserPermissions.ReadAnyAccount,
    UserPermissions.UpdateAnyAccount,
    UserPermissions.DeleteOwnAccount,
    UserPermissions.DeactivateOrDeleteAnyAccount,
  ],
};

/**
 * Group section
 */
enum GroupPermissions {
  ReadGroupMembers = "read_group_members",
  Participate = "join_events",
  ReadParticipationRecords = "read_participation_records",
  UpdateParticipationStatus = "update_participation_status",
  RemoveParticipants = "remove_participants",
}

export const GroupRolePermissions: Record<MembershipRoles, GroupPermissions[]> =
  {
    [MembershipRoles.User]: [],
    [MembershipRoles.Driver]: [],
    [MembershipRoles.Organizer]: [],
    [MembershipRoles.Admin]: [],
  };
