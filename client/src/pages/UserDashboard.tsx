import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import GroupRec from "../components/GroupRec";
import GroupInfo from "./GroupInfo";

const hasGroup = false;

const UserDashboard = () => {
  return (
    <div>
      <Navbar />
      {hasGroup ? (
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
      ) : (
        <Box>
          <Typography>Looks like you dont have a group!</Typography>
          <Typography>
            Heres a few groups that you might be interested
          </Typography>
          <GroupRec />

          <GroupInfo />
        </Box>
      )}
    </div>
  );
};

export default UserDashboard;
