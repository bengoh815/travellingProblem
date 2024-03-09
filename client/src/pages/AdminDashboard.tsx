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
import { ApplicationDecision, Applications } from "../models/application.types";
import { User, UserRoles } from "../models/user.types";

function createData(
  firstName: string,
  lastName: string,
  appType: UserRoles,
  decision: number
) {
  const user: User = {
    id: 0,
    firstName,
    lastName,
    email: "",
    password: "",
    roles: [],
  };
  return { id: 0, user, appType, decision };
}

const fakeData: Applications[] = [
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
            <AppsTable data={fakeData} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Organizer Application</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AppsTable data={fakeData} />
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
