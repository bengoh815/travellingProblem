import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Playground = () => {
  return (
    <div>
      <Navbar />
      <Typography variant="body1">'body1'</Typography>
      <Typography variant="body2">'body2'</Typography>
      <Typography variant="button">'button'</Typography>
      <Typography variant="caption">'caption'</Typography>
      <Typography variant="h1">'h1'</Typography>
      <Typography variant="h2">'h2'</Typography>
      <Typography variant="h3">'h3'</Typography>
      <Typography variant="h4">'h4'</Typography>
      <Typography variant="h5">'h5'</Typography>
      <Typography variant="h6">'h6'</Typography>
      <Typography variant="inherit">'inherit'</Typography>
      <Typography variant="overline">'overline'</Typography>
      <Typography variant="subtitle1">'subtitle1'</Typography>
      <Typography variant="subtitle2">'subtitle2'</Typography>
    </div>
  );
};

export default Playground;
