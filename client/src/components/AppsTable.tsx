import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

type Applications = {
  firstName: string;
  lastName: string;
  appType: string;
  decision: number;
  //   0 = pending, 1 = approved, 2 = denied
};

function createData(
  firstName: string,
  lastName: string,
  appType: string,
  decision: number
) {
  return { firstName, lastName, appType, decision };
}

const fakeData: Applications[] = [createData("Kent", "Jennefier", "Driver", 0)];

const Options = ({
  state,
  handleDecision,
}: {
  state: number;
  handleDecision: (n: number) => void;
}) => {
  switch (state) {
    case 1:
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleDecision(0)}
          >
            Approved
          </Button>
        </Box>
      );

    case 2:
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDecision(0)}
          >
            Denied
          </Button>
        </Box>
      );
    default:
      return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleDecision(1)}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDecision(2)}
          >
            Deny
          </Button>
        </Box>
      );
  }
};

const AppsTable = () => {
  const [decision, setDecision] = useState(0);

  const handleDecision = (n: number) => {
    setDecision(n);
  };

  return (
    <TableContainer component={Paper} sx={{ my: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "30%" }}>Name</TableCell>
            <TableCell sx={{ width: "30%" }}>Application Type</TableCell>
            <TableCell sx={{ width: "40%" }}>Decision</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fakeData.map((a) => {
            return (
              <TableRow>
                <TableCell>
                  {a.firstName}, {a.lastName}
                </TableCell>
                <TableCell>{a.appType}</TableCell>
                <TableCell>
                  {Options({ state: decision, handleDecision })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppsTable;
