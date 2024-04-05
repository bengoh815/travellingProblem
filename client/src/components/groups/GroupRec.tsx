// Standard library
import { useState, useEffect } from "react";
import axios from "axios";

// MUI
import { Box, Typography } from "@mui/material";

// Components
import GroupCard from "./GroupCard";

// Models
import { IGroup } from "../../models/group.types";

const GroupRec = () => {
  const [groupsData, setGroupsData] = useState<IGroup[]>([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get("http://localhost:8123/api/v1/groups");
        setGroupsData(response.data);
      } catch (error) {
        console.error("Error fetching groups: ", error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <Box>
      <Typography variant="h4">Groups</Typography>
      <Box sx={{ px: 5, display: "flex" }}>
        {groupsData.map((group, index) => (
          <GroupCard data={group} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default GroupRec;
