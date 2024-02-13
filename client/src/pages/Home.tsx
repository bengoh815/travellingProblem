import { Link } from "react-router-dom";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
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
        <Typography sx={{ fontSize: "2rem", textAlign: "center" }}>
          Come{" "}
          <MuiLink component={Link} to="/signup">
            join us now
          </MuiLink>
          !
        </Typography>
      </Box>
    </Box>
  );
}
