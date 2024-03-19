import { Check, Close } from "@mui/icons-material";
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
import { IApplication } from "../models/application.types";

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
            endIcon={<Check />}
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
            endIcon={<Close />}
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
            endIcon={<Check />}
          >
            Approve
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDecision(2)}
            endIcon={<Close />}
          >
            Deny
          </Button>
        </Box>
      );
  }
};

interface AppsTableProps {
  data: IApplication[];
}

const AppsTable: React.FC<AppsTableProps> = ({ data }) => {
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
          {data.map((a) => {
            return (
              <TableRow>
                <TableCell>
                  {a.user.firstName}, {a.user.lastName}
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
