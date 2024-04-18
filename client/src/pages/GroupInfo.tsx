// Standard library
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// MUI
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import Navbar from "../components/navigation/Navbar";
import UserList from "../components/users/UserList";
import ProtectedComponent from "../components/utils/ProtectedComponent";

// Context
import { useUser } from "../context/userContext";

// Models
import { IGroup } from "../models/group.types";
import EventCreate from "../components/events/EventCreate";
import { IEvent } from "../models/event.types";
import GroupEvents from "../components/groups/GroupEvents";

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
  // Get user context
  const { user } = useUser();

  // Manage tab components
  const [tabState, setTabState] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabState(newValue);
  };

  // Group information
  const params = useParams();
  const [groupData, setGroupData] = useState<IGroup | null>(null);

  useEffect(() => {
    const fetchGroupById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8123/api/v1/groups/${params.groupId}`
        );
        setGroupData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching group by id: ", error);
      }
    };

    fetchGroupById();
  }, [params.groupId]);

  return (
    <ProtectedComponent>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h3">{groupData?.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            TO BE FIXED members
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
              <GroupEvents />
            </CustomTabPanel>
            <CustomTabPanel value={tabState} index={1}>
              <UserList />
            </CustomTabPanel>
            <CustomTabPanel value={tabState} index={2}>
              {groupData?.description}
              {"\n"}
              {new Date(
                groupData?.createdAt ? groupData.createdAt : ""
              ).toDateString()}
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </ProtectedComponent>
  );
};

export default GroupInfo;
