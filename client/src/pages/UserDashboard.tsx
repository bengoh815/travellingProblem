import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import GroupRec from "../components/GroupRec";
import ProtectedComponent from "../components/ProtectedComponent";
import EventUpcoming from "../components/EventUpcoming";

const UserDashboard = () => {
  return (
    <ProtectedComponent>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <Grid item md={12}>
          <Box sx={{ p: 2, minHeight: "30vh" }}>
            <EventUpcoming />
          </Box>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ p: 2 }}>
            <GroupRec />
          </Box>
        </Grid>
      </Grid>
    </ProtectedComponent>
  );
};

export default UserDashboard;
