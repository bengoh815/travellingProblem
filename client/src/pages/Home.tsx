import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import StyledLink from "../components/StyledLink";

const Home = () => {
  return (
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
        <Typography
          sx={{ fontSize: "4rem", textAlign: "center", mx: "auto", mb: 2 }}
        >
          Family Group Ride Organizer
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Come{" "}
          <StyledLink to="/signup" variant="h5">
            join us{" "}
          </StyledLink>
          now!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
