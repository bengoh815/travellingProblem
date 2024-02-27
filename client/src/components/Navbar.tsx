import { Box, Divider } from "@mui/material";
import StyledLink from "./StyledLink";

const Navbar = () => {
  return (
    <Box
      sx={{ height: "5vh", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", p: 1, gap: 2 }}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <Divider orientation="vertical" />
        <StyledLink to="/dashboard/host">Host Dashboard</StyledLink>
        <StyledLink to="/dashboard/admin">Admin Dashboard</StyledLink>
        <StyledLink to="/playground">Playground</StyledLink>
      </Box>
      <Box sx={{ display: "flex", p: 1, gap: 2 }}>
        <StyledLink to="/login">Log in</StyledLink>
        <StyledLink to="/signup">Sign up</StyledLink>
      </Box>
    </Box>
  );
};
export default Navbar;
