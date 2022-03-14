import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Details from './Details';
import Notes from './Notes';
import Ask from './Ask';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ pt: 2, pb: 2 }}>
          {children}
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function DescriptionTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" />
          <Tab label="Notes" />
          <Tab label="Ask" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Notes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ask />
      </TabPanel>
    </Box>
  );
}
