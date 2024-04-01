import { Box, Divider, Typography } from "@mui/material";
import { IGroup } from "../models/group.types";
import GroupCard from "./GroupCard";

const GroupRec = () => {
  const groupsData: IGroup[] = [
    {
      name: "International Student Group",
      description:
        "A group for international students to connect and share experiences.",
      members: ["user1", "user2", "user3"],
      events: [
        {
          name: "Welcome Party",
          description: "A party to welcome new international students.",
          date: new Date("2023-09-01T18:00:00Z"),
          groupId: "group1",
          attendees: ["user1", "user2"],
        },
        {
          name: "Cultural Exchange Night",
          description:
            "An event to learn about and celebrate different cultures.",
          date: new Date("2023-10-15T19:00:00Z"),
          groupId: "group1",
          attendees: ["user2", "user3"],
        },
      ],
    },
    {
      name: "Tech Enthusiasts",
      description: "A group for students interested in technology and coding.",
      members: ["user4", "user5", "user6"],
      events: [
        {
          name: "Hackathon",
          description: "A coding competition for building innovative projects.",
          date: new Date("2023-11-10T09:00:00Z"),
          groupId: "group2",
          attendees: ["user4", "user5"],
        },
        {
          name: "Tech Talk",
          description: "A talk on the latest trends in technology.",
          date: new Date("2023-12-05T17:00:00Z"),
          groupId: "group2",
          attendees: ["user5", "user6"],
        },
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h4">Groups</Typography>
      <Box sx={{ px: 5, display: "flex" }}>
        {groupsData.map((e, i) => (
          <GroupCard data={e} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default GroupRec;
