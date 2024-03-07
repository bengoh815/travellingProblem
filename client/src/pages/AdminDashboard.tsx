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
import AppsTable, { Applications } from "../components/AppsTable";

function createData(
  firstName: string,
  lastName: string,
  appType: string,
  decision: number
) {
  return { firstName, lastName, appType, decision };
}

const fakeData: Applications[] = [createData("Kent", "Jennefier", "Driver", 0)];

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{ p: 3 }}>
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
