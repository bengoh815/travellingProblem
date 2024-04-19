// Standard library
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// MUI
import {
  Box,
  Button,
  Grid,
  Skeleton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";

// Components
import Navbar from "../components/navigation/Navbar";
import UserList from "../components/users/UserList";
import ProtectedComponent from "../components/utils/ProtectedComponent";

// Context
import { useUser } from "../context/userContext";

// Models
import { IGroup, IGroupState } from "../models/group.types";
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
  const navigate = useNavigate();

  // Get user context
  const { user } = useUser();

  // Manage tab components
  const [tabState, setTabState] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabState(newValue);
  };

  // Group information
  const { groupId } = useParams<{ groupId: string }>();
  const [groupState, setGroupState] = useState<IGroupState>({
    group: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchGroupById = async () => {
      setGroupState((prevState) => ({ ...prevState, isLoading: true }));

      function delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      try {
        await delay(5000);
        const response = await axios.get<IGroup>(
          `http://localhost:8123/api/v1/groups/${groupId}`
        );
        setGroupState({ group: response.data, isLoading: false, error: null });
      } catch (error) {
        console.error("Error fetching group by id:", error);
        setGroupState((prevState) => ({
          ...prevState,
          isLoading: false,
          error: "Failed to fetch group",
        }));
        navigate("/error");
      }
    };

    if (groupId) {
      fetchGroupById();
    }
  }, [groupId]);

  const groupCreatedAtDate = groupState.group ? (
    new Date(groupState.group.createdAt).toDateString()
  ) : (
    <Skeleton />
  );

  return (
    <ProtectedComponent>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <Grid item md={12}>
          <Typography variant="h3">
            {groupState.group ? groupState.group.name : <Skeleton />}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {groupState.group ? `5 members (TO BE FIXED)` : <Skeleton />}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tabState}
                onChange={handleChange}
                aria-label="basic tabs"
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
              <Typography>
                {groupState.group ? groupState.group.description : <Skeleton />}
              </Typography>
              <Typography>{groupCreatedAtDate}</Typography>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </ProtectedComponent>
  );
};

export default GroupInfo;
