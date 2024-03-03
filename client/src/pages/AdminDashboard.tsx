import { Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import StyledTable from "../components/Table";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Typography>Driver Application</Typography>
      <StyledTable />

      <Typography>Organizer Application</Typography>
      <StyledTable />
    </div>
  );
};

export default AdminDashboard;
