import Navbar from "../components/navigation/Navbar";
import { Box, Typography } from "@mui/material";
import RedirectDashboard from "../components/utils/RedirectDashboard";

const About = () => {
  return (
    <RedirectDashboard>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90vh",
          }}
        >
          <Typography align="center">
            Join us for a meal and engaging Bible discussions every Friday. We
            aim to foster a welcoming environment that feels like a second home
            for international students.
          </Typography>
        </Box>
      </Box>
    </RedirectDashboard>
  );
};
export default About;
