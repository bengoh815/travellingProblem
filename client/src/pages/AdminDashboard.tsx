import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import StyledTable from "../components/Table";
import AppsTable from "../components/AppsTable";
import { ApplicationDecision, IApplication } from "../models/application.types";
import { IUser, UserRoles } from "../models/user.types";

function createData(
  firstName: string,
  lastName: string,
  appType: UserRoles,
  decision: number
) {
  const user: IUser = {
    firstName,
    lastName,
    email: "",
    password: "",
    roles: [],
    memberships: [],
  };
  return { user, appType, decision };
}

const fakeData: IApplication[] = [
  createData(
    "Kent",
    "Jennefier",
    UserRoles.Driver,
    ApplicationDecision.Pending
  ),
];

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <div>Want to see growth, google api usage, overall events/groups</div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Driver Application</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AppsTable appsData={fakeData} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Organizer Application</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AppsTable appsData={fakeData} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>All Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledTable />
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default AdminDashboard;
