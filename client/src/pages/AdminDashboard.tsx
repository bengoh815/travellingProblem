import { Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import StyledTable from "../components/Table";
import AppsTable from "../components/AppsTable";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Typography>Driver Application</Typography>
      <AppsTable />

      <Typography>Organizer Application</Typography>
      <StyledTable />
    </div>
  );
};

export default AdminDashboard;
