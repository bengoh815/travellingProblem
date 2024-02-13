import { useState } from "react";
import { User } from "./Profile";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
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
          <Paper sx={{ p: 3, borderRadius: 5 }}>
            <Typography variant="h5" sx={{ my: 4, textAlign: "center" }}>
              Sign up and join the fun!
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                  m: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <FormControl>
                    <InputLabel htmlFor="su-fn">First Name</InputLabel>
                    <Input
                      id="su-fn"
                      name="firstName"
                      type="text"
                      value={formState.firstName}
                      onChange={handleFormChange}
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="su-ln">Last Name</InputLabel>
                    <Input
                      id="su-ln"
                      name="lastName"
                      type="text"
                      value={formState.lastName}
                      onChange={handleFormChange}
                    />
                  </FormControl>
                </Box>
                <FormControl>
                  <InputLabel htmlFor="su-e">Email</InputLabel>
                  <Input
                    id="su-e"
                    name="email"
                    type="text"
                    value={formState.email}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="su-p">Password</InputLabel>
                  <Input
                    id="su-p"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleFormChange}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="su-cp">Confirm Password</InputLabel>
                  <Input
                    id="su-cp"
                    name="confirmPassword"
                    type="password"
                    value={formState.confirmPassword}
                    onChange={handleFormChange}
                  />
                </FormControl>
                {error && <Typography color="error">{error}</Typography>}

                <Button variant="contained" type="submit" sx={{ mt: 5 }}>
                  Sign up
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
