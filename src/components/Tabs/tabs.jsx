import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
//import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    ></div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({value, handleChange}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab sx={{color: "var(--white-color)"}} label="All" {...a11yProps(0)} />
          <Tab sx={{color: "var(--white-color)"}} label="Rock" {...a11yProps(1)} />
          <Tab sx={{color: "var(--white-color)"}} label="Pop" {...a11yProps(2)} />
          <Tab sx={{color: "var(--white-color)"}} label="Jazz" {...a11yProps(3)} />
          <Tab sx={{color: "var(--white-color)"}} label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        sx={{ color: "var(--primary-color)" }}
        value={value}
        index={0}
      >
        All
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Rock
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Pop
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Jazz
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Blues
      </CustomTabPanel>
    </Box>
  );
}
