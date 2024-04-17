import { Box, Button } from "@mui/material";
import StyledLink from "./StyledLink";
import { useUser } from "../../context/userContext";
import { IUser } from "../../models/user.types";

const Navbar = () => {
  const { user } = useUser();

  const { login, logout } = useUser();
  const fakeUser: IUser = {
    firstName: "Jessica",
    lastName: "Yean",
    phoneNumber: "4891232367",
    email: "jessicayean@example.com",
    password: "password123",
    roles: [],
    isAdmin: true,
  };

  const handleChange = () => {
    if (user) {
      logout();
    } else {
      login(fakeUser);
    }
  };

  return (
    <Box
      sx={{ height: "5vh", display: "flex", justifyContent: "space-between" }}
    >
      <Box sx={{ display: "flex", p: 1, gap: 2 }}>
        {user ? (
          <Box sx={{ display: "flex", p: 1, gap: 2 }}>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <StyledLink to="/dashboard/driver">Driver</StyledLink>
            <StyledLink to="/dashboard/admin">Admin</StyledLink>
            <StyledLink to="/events/:eventId">Event</StyledLink>
            <StyledLink to="/playground">Playground</StyledLink>
          </Box>
        ) : (
          <Box sx={{ display: "flex", p: 1, gap: 2 }}>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </Box>
        )}
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* Temporary box layer */}
        <Button onClick={handleChange}>User = {user ? "true" : "false"}</Button>
        {!user && (
          <Box sx={{ display: "flex", p: 1, gap: 2 }}>
            <StyledLink to="/login">Log in</StyledLink>
            <StyledLink to="/signup">Sign up</StyledLink>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Navbar;
