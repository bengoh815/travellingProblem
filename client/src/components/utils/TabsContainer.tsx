// Standard library
import React, { useState } from "react";

// MUI
import { Box, Tabs, Tab } from "@mui/material";

// Components
import TabPanel from "./TabPanel";

interface TabsContainerProps {
  labels: string[]; // Array of labels for the tabs
  children: React.ReactNode[]; // Array of ReactNode elements corresponding to tab panels
}

const TabsContainer: React.FC<TabsContainerProps> = ({ labels, children }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
          {labels.map((label, index) => (
            <Tab label={label} key={index} />
          ))}
        </Tabs>
      </Box>
      {children.map((child, index) => (
        <TabPanel value={value} index={index} key={index}>
          {child}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabsContainer;
