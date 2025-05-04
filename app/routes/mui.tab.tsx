import { Favorite } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";

export default function TabDemo() {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box bgcolor="success" p={2}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              aria-label="MUI Tabs demo"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Tab one"
                value="1"
                icon={<Favorite />}
                iconPosition="start"
              />
              <Tab
                label="Tab two"
                value="2"
                icon={<Favorite />}
                disabled
                iconPosition="start"
              />
              <Tab
                label="Tab three"
                value="3"
                icon={<Favorite />}
                iconPosition="start"
              />
              <Tab
                label="Tab four"
                value="4"
                icon={<Favorite />}
                iconPosition="start"
              />
              <Tab
                label="Tab five"
                value="5"
                icon={<Favorite />}
                disabled
                iconPosition="start"
              />
              <Tab
                label="Tab six"
                value="6"
                icon={<Favorite />}
                iconPosition="start"
              />
            </TabList>
          </Box>
          <TabPanel value="1">Panel one</TabPanel>
          <TabPanel value="2">Panel two</TabPanel>
          <TabPanel value="3">Panel three</TabPanel>
          <TabPanel value="4">Panel four</TabPanel>
          <TabPanel value="5">Panel five</TabPanel>
          <TabPanel value="6">Panel six</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
