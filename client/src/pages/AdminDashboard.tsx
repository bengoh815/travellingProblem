import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/navigation/Navbar";
import AppsTable from "../components/applications/AppsTable";

import Analytics from "../components/Analytics";
import GroupCreate from "../components/groups/GroupCreate";

const AdminDashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Analytics />
      </Grid>
      <Grid item xs={12}>
        <GroupCreate />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ px: 3 }}>
          <AppsTable />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
