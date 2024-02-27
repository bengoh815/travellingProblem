import { Box, Grid, Typography, TypographyProps } from "@mui/material";
import { Link } from "react-router-dom";

const StyledTypography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <Typography
      variant="body1"
      component={Link}
      to="/signup"
      color="primary"
      sx={{
        textDecoration: "none",
      }}
    >
      {children}
    </Typography>
  );
};

export default function Error() {
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
          <StyledTypography>Home</StyledTypography>
          <StyledTypography>About</StyledTypography>
          <StyledTypography>Log in</StyledTypography>
          <StyledTypography>Sign up</StyledTypography>
        </Box>
      </Grid>
    </Grid>
  );
}
