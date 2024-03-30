import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AppsTable from "../components/AppsTable";
import { ApplicationDecision, IApplication } from "../models/application.types";
import { IUser, UserRoles } from "../models/user.types";
import Analytics from "../components/Analytics";

const fakeUser: IUser[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password123",
    roles: [],
    memberships: [],
  },
  {
    firstName: "Kent",
    lastName: "Ady",
    email: "Kentady@example.com",
    password: "password123",
    roles: [],
    memberships: [],
  },
  {
    firstName: "Jerry",
    lastName: "Synth",
    email: "JerrySynth@example.com",
    password: "password123",
    roles: [],
    memberships: [],
  },
];

const fakeData: IApplication[] = [
  {
    user: fakeUser[0],
    appType: UserRoles.Driver,
    decision: ApplicationDecision.Pending,
    createdAt: new Date("2023-04-15T10:00:00Z"),
  },
  {
    user: fakeUser[1],
    appType: UserRoles.Driver,
    decision: ApplicationDecision.Pending,
    createdAt: new Date("2023-04-15T10:00:00Z"),
  },
  {
    user: fakeUser[2],
    appType: UserRoles.Organizer,
    decision: ApplicationDecision.Pending,
    createdAt: new Date("2023-04-15T10:00:00Z"),
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Analytics />
      <Box sx={{ px: 3 }}>
        <AppsTable appsData={fakeData} />
      </Box>
    </div>
  );
};

export default AdminDashboard;
