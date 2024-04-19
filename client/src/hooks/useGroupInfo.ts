// Standard library
import { useState, useEffect } from "react";
import axios from "axios";

// Component
import { IGroup, IGroupState } from "../models/group.types";

export const useFetchGroup = (groupId: string) => {
  const [groupState, setGroupState] = useState<IGroupState>({
    group: null,
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchGroupById = async () => {
      setGroupState((prevState) => ({ ...prevState, isLoading: true }));
      try {
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
      }
    };

    if (groupId) {
      fetchGroupById();
    }
  }, [groupId]);

  return groupState;
};
