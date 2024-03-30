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

// TODO: Pagination

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

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface AppsTableProps {
  appsData: IApplication[];
}

const AppsTable: React.FC<AppsTableProps> = ({ appsData }) => {
  const [decision, setDecision] = useState(0);

  const handleDecision = (n: number) => {
    setDecision(n);
  };

  return (
    <TableContainer component={Paper} sx={{ my: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Applicant Name</TableCell>
            <TableCell sx={{ width: "20%" }}>Application Type</TableCell>
            <TableCell sx={{ width: "20%" }}>Status</TableCell>
            <TableCell sx={{ width: "20%" }}>Submission Date</TableCell>
            <TableCell sx={{ width: "20%" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appsData.map((a) => {
            return (
              <TableRow>
                <TableCell>
                  {a.user.firstName}, {a.user.lastName}
                </TableCell>
                <TableCell>{capitalizeFirstLetter(a.appType)}</TableCell>
                <TableCell>{a.decision}</TableCell>
                <TableCell>{a.createdAt.toDateString()}</TableCell>
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
