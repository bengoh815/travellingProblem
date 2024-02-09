import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Typography>This is the about page :D</Typography>
    </Box>
  );
}
