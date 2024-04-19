// Standard library
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// MUI
import { Box, Grid, Skeleton, Tab, Tabs, Typography } from "@mui/material";

// Components
import Navbar from "../components/navigation/Navbar";
import UserList from "../components/users/UserList";
import ProtectedComponent from "../components/utils/ProtectedComponent";

// Context
import { useUser } from "../context/userContext";

// Models
import { IGroup, IGroupState } from "../models/group.types";
import GroupEvents from "../components/groups/GroupEvents";
import TabsContainer from "../components/utils/TabsContainer";

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
            <TabsContainer labels={["Events", "People", "About"]}>
              <GroupEvents />
              <UserList />
              <Box>
                <Typography>
                  {groupState.group ? (
                    groupState.group.description
                  ) : (
                    <Skeleton />
                  )}
                </Typography>
                <Typography>{groupCreatedAtDate}</Typography>
              </Box>
            </TabsContainer>
          </Box>
        </Grid>
      </Grid>
    </ProtectedComponent>
  );
};

export default GroupInfo;
