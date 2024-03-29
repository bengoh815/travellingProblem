import { Image } from "@mui/icons-material";
import { Card, CardContent, Grid, Tab, Tabs, Typography } from "@mui/material";
import EventFeed from "./EventFeed";
import { useState } from "react";

const GroupInfo = () => {
  const [tabState, setTabState] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabState(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Image />
      </Grid>
      <Grid item md={12}>
        <Tabs value={tabState} onChange={handleChange}>
          <Tab value="1" label="Events" />
          <Tab value="2" label="People" />
          <Tab value="3" label="About" />
        </Tabs>
      </Grid>
      <Grid item md={12}>
        <EventFeed />
      </Grid>
    </Grid>
  );
};

export default GroupInfo;
