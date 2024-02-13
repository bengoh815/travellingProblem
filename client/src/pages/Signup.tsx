import { useState } from "react";
import { User } from "./Profile";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function Signup() {
  const defaultUser: Pick<User, "firstName" | "lastName" | "email"> & {
    password: string;
    confirmPassword: string;
  } = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formState, setFormState] = useState(defaultUser);
  const [error, setError] = useState("");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Send to API
    }
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            Sign up and join the fun!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box>
                <TextField
                  id="su-fn"
                  name="firstName"
                  label="First Name"
                  variant="standard"
                  value={formState.firstName}
                  onChange={handleFormChange}
                />
                <TextField
                  id="su-ln"
                  name="lastName"
                  label="Last Name"
                  variant="standard"
                  value={formState.lastName}
                  onChange={handleFormChange}
                />
              </Box>
              <TextField
                id="su-e"
                name="email"
                label="Email"
                variant="standard"
                value={formState.email}
                onChange={handleFormChange}
              />
              <FormControl>
                <TextField
                  id="su-p"
                  name="password"
                  type="password"
                  label="Password"
                  variant="standard"
                  value={formState.password}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="su-cp"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  variant="standard"
                  value={formState.confirmPassword}
                  onChange={handleFormChange}
                />
              </FormControl>
            </Box>
            {error && <Typography color="error">{error}</Typography>}

            <Button type="submit">Sign up</Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
