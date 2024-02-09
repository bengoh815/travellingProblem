import { Button } from "@mui/material";
import { Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Box display="flex">
        <Button>Home</Button>
        <Button>About</Button>
      </Box>
      <Box display="flex">
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </Box>
    </Box>
  );
}
