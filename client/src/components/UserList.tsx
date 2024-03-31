import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { IUser } from "../models/user.types";

const UserList = () => {
  const userData: IUser[] = [
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "4891232367",
      email: "johndoe@example.com",
      password: "password123",
      isAdmin: false,
      roles: [],
      memberships: [],
    },
    {
      firstName: "Jessica",
      lastName: "Yean",
      phoneNumber: "4891232367",
      email: "jessicayean@example.com",
      password: "password123",
      isAdmin: false,
      roles: [],
      memberships: [],
    },
    {
      firstName: "Poe",
      lastName: "Neil",
      phoneNumber: "4891232367",
      email: "poeneil@example.com",
      password: "password123",
      isAdmin: false,
      roles: [],
      memberships: [],
    },
  ];

  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant="h5">Organizers</Typography>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>
          <Typography variant="h5">Drivers</Typography>
        </ListItemText>
      </ListItem>

      {userData.map((e, i) => (
        <ListItem key={i}>
          <ListItemText>
            {e.firstName} {e.lastName}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
