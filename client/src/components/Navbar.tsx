import { Link } from "react-router-dom";
import { Box, Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  fontSize: "1rem",
});

export default function Navbar() {
  return (
    <Box
      sx={{ height: "5vh", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link to="/">
          <StyledButton>Home</StyledButton>
        </Link>
        <Link to="/about">
          <StyledButton>About</StyledButton>
        </Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Link to="/login">
          <StyledButton>Log in</StyledButton>
        </Link>
        <Link to="/signup">
          <StyledButton>Sign up</StyledButton>
        </Link>
      </Box>
    </Box>
  );
}
