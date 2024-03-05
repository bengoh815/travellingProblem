import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Navbar from "../components/Navbar";

const OrgDashboard = () => {
  // Host does all the organizing
  const [event, setEvent] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setEvent(event.target.value as string);
  };

  return (
    <Box sx={{ height: "98vh", width: "99vw", background: "azure" }}>
      <Navbar />
      <Typography>Organizer Dashbaord</Typography>
      <Box sx={{ width: "30%", p: 1, pt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="event-select-label">Event</InputLabel>
          <Select
            labelId="event-select-label"
            id="event-select"
            value={event}
            label="Event"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ m: 2, p: 1, background: "Beige" }}>
        Something
        <Box
          sx={{
            mx: 5,
            my: 2,
            display: "flex",
            justifyContent: "space-between",
            background: "Plum",
          }}
        >
          <Box sx={{ flex: 2, backgroundColor: "red" }}>Event</Box>
          <Box sx={{ flex: 1, backgroundColor: "green" }}>Participants</Box>
          <Box sx={{ flex: 1, backgroundColor: "blue" }}>Drivers Available</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrgDashboard;
