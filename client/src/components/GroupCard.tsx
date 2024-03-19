import { Typography } from "@mui/material";
import { IGroup } from "../models/group.types";

interface GroupCardProps {
  data: IGroup;
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
  return (
    <>
      <Typography>{data.name}</Typography>
      <Typography>{data.description}</Typography>
      <Typography>{data.members}</Typography>
      {data.events.map((e) => (
        <Typography>{e.name}</Typography>
      ))}
    </>
  );
};

export default GroupCard;
