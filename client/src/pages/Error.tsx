import { Box, Grid, Typography } from "@mui/material";
import StyledLink from "../components/StyledLink";

const Error = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "98vh" }}
    >
      <Grid item>
        <Typography variant="h3">Error 404 Not Found</Typography>
        <Typography variant="h5" marginY={2}>
          Here are some helpful links:
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
          <StyledLink to="/signup">Sign up</StyledLink>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Error;
