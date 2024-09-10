type AppPermissions =
  | UserPermissions
  | GroupPermissions
  | ApplicationPermisssions
  | MembershipPermissions
  | EventPermissions
  | RidePermissions
  | ParticipationPermissions;

enum UserPermissions {
  ReadOwnAccount = "read_own_account",
  ReadAnyAccount = "read_any_account",

  CreateAccounts = "create_accounts",

  UpdateOwnAccount = "update_own_account",
  UpdateAnyAccount = "update_any_account",

  DeleteOwnAccount = "delete_own_account",
  DeleteAnyAccount = "delete_any_account",
}

enum GroupPermissions {
  ReadGroups = "read_groups",
  CreateGroups = "create_groups",

  UpdateGroup = "update_group", // Many group specific checks

  DeleteGroups = "delete_groups", // Specific checks
}

enum ApplicationPermisssions {
  ReadOwnApplications = "read_own_applications",
  ReadAnyApplications = "read_any_applications",

  CreateApplications = "create_applications",

  UpdateOwnApplications = "update_own_applications",
  UpdateAnyApplications = "update_any_applications",

  DeleteOwnApplications = "delete_own_applications",
  DeleteAnyApplications = "delete_any_applications",
}

enum MembershipPermissions {
  ReadMemberships = "read_memberships",
  CreateMemberships = "create_memberships",

  UpdateOwnMemberships = "update_own_memberships",
  UpdateAnyMemberships = "update_any_memberships",

  DeleteOwnMemberships = "delete_own_memberships",
  DeleteAnyMemberships = "delete_any_memberships",
}

enum EventPermissions {
  ReadEvents = "read_events", // make sure they are in the group unless global role

  CreateEvents = "create_events",

  UpdateEvents = "update_events",

  DeleteEvents = "delete_events",
}

enum RidePermissions {
  ReadRides = "read_rides",

  CreateRides = "create_rides",

  UpdateRides = "update_rides",

  DeleteRides = "delete_rides",
}

enum ParticipationPermissions {
  ReadParticipations = "read_participations",
  CreateOwnParticipations = "create_own_participations",
  CreateAnyParticipations = "create_any_participations",
  UpdateOwnParticipations = "update_own_participations",
  UpdateAnyParticipations = "update_any_participations",
  DeleteOwnParticipations = "delete_own_participations",
  DeleteAnyParticipations = "delete_any_participations",
}
