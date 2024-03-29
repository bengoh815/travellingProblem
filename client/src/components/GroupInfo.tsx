import { Image } from "@mui/icons-material";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import EventFeed from "./EventFeed";
import { useState } from "react";
import { IGroup } from "../models/group.types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`group-tabpanel-${index}`}
      aria-labelledby={`group-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `group-tab-${index}`,
    "aria-controls": `group-tabpanel-${index}`,
  };
}

const GroupInfo = () => {
  const [tabState, setTabState] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabState(newValue);
  };

  const groupData: IGroup = {
    name: "Tech Enthusiasts",
    description:
      "A group for people passionate about technology and innovation.",
    members: ["member1", "member2", "member3"],
    events: [
      {
        name: "Tech Talk",
        description: "A discussion on the latest trends in technology.",
        date: new Date("2023-05-20T18:00:00Z"),
        groupId: "group1",
        attendees: ["member1", "member2"],
      },
      {
        name: "Hackathon",
        description: "A coding competition to build innovative projects.",
        date: new Date("2023-06-15T09:00:00Z"),
        groupId: "group1",
        attendees: ["member2", "member3"],
      },
    ],
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Image />
      </Grid>
      <Grid item md={12}>
        <Typography variant="h3">{groupData.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {groupData.members.length} members
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabState}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Events" {...a11yProps(0)} />
              <Tab label="People" {...a11yProps(1)} />
              <Tab label="About" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={tabState} index={0}>
            <EventFeed eventsData={groupData.events} />
          </CustomTabPanel>
          <CustomTabPanel value={tabState} index={1}>
            {groupData.members.map((e) => (
              <Box>{e}</Box>
            ))}
          </CustomTabPanel>
          <CustomTabPanel value={tabState} index={2}>
            {groupData.description}
          </CustomTabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GroupInfo;
