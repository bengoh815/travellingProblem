import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import EventFeed from "../components/EventFeed";
import { useEffect, useState } from "react";
import { IGroup } from "../models/group.types";
import Navbar from "../components/Navbar";
import { Add } from "@mui/icons-material";
import UserList from "../components/UserList";
import { useUser } from "../context/userContext";
import { IUser } from "../models/user.types";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const { user, login } = useUser();

  useEffect(() => {
    const fakeUser: IUser = {
      firstName: "Jessica",
      lastName: "Yean",
      phoneNumber: "4891232367",
      email: "jessicayean@example.com",
      password: "password123",
      roles: [],
      isAdmin: true,
      memberships: [],
    };
    login(fakeUser);
  }, []); // Empty dependency array

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
        <Navbar />
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
            {user?.isAdmin && (
              <Button variant="contained" endIcon={<Add />}>
                Create new event
              </Button>
            )}
            <EventFeed eventsData={groupData.events} />
          </CustomTabPanel>
          <CustomTabPanel value={tabState} index={1}>
            <UserList />
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
