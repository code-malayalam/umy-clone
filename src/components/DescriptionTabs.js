import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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


export default function DescriptionTabs(props) {
  const {
    data,
    isFirst,
    isLast,
    onNext,
    onPrev
  } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{display: 'flex'}}>
          <Tab label="Details" />
          <Tab label="Notes" />
          <Tab label="Ask" />
          <Box style={{display: 'flex', flexGrow: 1, flexDirection: 'row-reverse'}}>
            <Button disabled={isLast} color="secondary" onClick={onNext}>Next</Button>
            <Button disabled={isFirst} color="secondary" onClick={onPrev}>Previous</Button>
          </Box>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details selected={value === 0} data={data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Notes selected={value === 1} videoId={data.id}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Ask selected={value === 2} videoId={data.id}/>
      </TabPanel>
    </Box>
  );
}
