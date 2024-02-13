import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex" }}>
        <Button component={Link} to="/" sx={{ fontSize: "1rem" }}>
          Home
        </Button>
        <Button component={Link} to="/about">
          About
        </Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button component={Link} to="/login">
          Log in
        </Button>
        <Button component={Link} to="/signup">
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
