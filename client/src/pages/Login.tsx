import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

export default function Login() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box sx={{ display: "flex", bgcolor: "red" }}></Box>
      </Box>
    </Box>
  );
}
