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

const Login = () => {
  const defaultUser: Pick<User, "email"> & {
    password: string;
  } = {
    email: "",
    password: "",
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

    // Send to API
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Paper sx={{ p: 3, borderRadius: 5, minWidth: "382px" }}>
            <Typography variant="h5" sx={{ my: 4, textAlign: "center" }}>
              Log in
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
                {error && <Typography color="error">{error}</Typography>}

                <Button variant="contained" type="submit" sx={{ mt: 5 }}>
                  Log in
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
