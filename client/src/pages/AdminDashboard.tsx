import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import AppsTable from "../components/AppsTable";

import Analytics from "../components/Analytics";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Analytics />
      <Box sx={{ px: 3 }}>
        <AppsTable />
      </Box>
    </div>
  );
};

export default AdminDashboard;
