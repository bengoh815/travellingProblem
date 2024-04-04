import { useState } from "react";
import { Box, Button } from "@mui/material";
import { Check, Close, Restore } from "@mui/icons-material";

interface IOptions {
  initialState: number;
  updateFunction: string;
}

const Options: React.FC<IOptions> = ({ initialState, updateFunction }) => {
  const [optionState, setOptionState] = useState(initialState);

  const handleChange = (updateState: number) => {
    setOptionState(updateState);
  };

  switch (optionState) {
    case 1:
    case 2:
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => handleChange(0)}
            endIcon={<Restore />}
          >
            Revoke
          </Button>
        </Box>
      );
    default:
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleChange(1)}
            endIcon={<Check />}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleChange(2)}
            endIcon={<Close />}
          >
            Deny
          </Button>
        </Box>
      );
  }
};

export default Options;
