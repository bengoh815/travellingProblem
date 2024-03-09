import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import EventRec from "../components/EventRec";

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
        }}
      >
        <Typography variant="h3">Are you coming this Friday?</Typography>
      </Box>
      <div>Want to see events / groups</div>
      <Box>Subscribed</Box>
      <Box>Recommended</Box>
      <Typography>Looks like you dont have a group!</Typography>
      <Typography>Heres a few groups if youre interested</Typography>
      <EventRec />
    </div>
  );
};

export default UserDashboard;
