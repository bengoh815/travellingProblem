import Navbar from "../components/Navbar";
import { Box, Link, Typography } from "@mui/material";

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
          Come <Link>join us now</Link>!
        </Typography>
      </Box>
    </Box>
  );
}
