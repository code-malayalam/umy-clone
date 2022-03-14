import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideCard from './SideCard';
import VideoContainer from './VideoContainer';

export default function SimpleContainer() {
  const [videoId, setVideoId] = useState('QKtXPrY_54s');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#efefef', display: 'flex', flexDirection: { xs: "column", md: "row"}}} >
          <Box sx={{ flexGrow: 1 }}>
            <VideoContainer key={videoId} videoId={videoId}/>
          </Box>
          <Box sx={{minWidth: '320px', width: { xs: "initial", md: "300px"},  ml: { xs: 0, md: 1}}}>
            <SideCard onClick={() => {
              setVideoId('xCn-dsVNfqY');
            }}/>
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
            <SideCard />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
