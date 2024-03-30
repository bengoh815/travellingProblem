import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ApplicationDecision, IApplication } from "../models/application.types";
import { IUser, UserRoles } from "../models/user.types";
import Options from "./AppsOption";

// TODO: Pagination
// TODO Options update function to call

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const AppsTable = () => {
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

  return (
    <TableContainer component={Paper} sx={{ my: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Applicant Name</TableCell>
            <TableCell sx={{ width: "20%" }}>Application Type</TableCell>
            <TableCell sx={{ width: "20%" }}>Status</TableCell>
            <TableCell sx={{ width: "20%" }}>Submission Date</TableCell>
            <TableCell sx={{ width: "20%" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeData.map((a) => {
            return (
              <TableRow>
                <TableCell>
                  {a.user.firstName}, {a.user.lastName}
                </TableCell>
                <TableCell>{capitalizeFirstLetter(a.appType)}</TableCell>
                <TableCell>{a.decision}</TableCell>
                <TableCell>{a.createdAt.toDateString()}</TableCell>
                <TableCell>
                  <Options initialState={0} updateFunction="smtg" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppsTable;
