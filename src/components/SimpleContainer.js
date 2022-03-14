import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideCard from './SideCard';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#efefef', display: 'flex', flexDirection: { xs: "column", md: "row"}}} >
          <Box sx={{ flexGrow: 1 }}>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/d-XCfp97pX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
          <Box sx={{minWidth: '320px', width: { xs: "initial", md: "300px"},  ml: { xs: 0, md: 1}}}>
            <SideCard />
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
