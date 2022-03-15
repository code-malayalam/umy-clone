import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideCard from './SideCard';
import VideoContainer from './VideoContainer';
import { getChapterMetaWithId } from '../api';

export default function SimpleContainer({courseId}) {
  const [videoData, setVideoData] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapterMetaWithId(courseId)
        .then((data) => {
            setChapters(data);
            if(data && data.length) {
                setVideoData(data[0]);
            }
        })
  }, [courseId]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#efefef', display: 'flex', flexDirection: { xs: "column", md: "row"}}} >
          <Box sx={{ flexGrow: 1}}>
              {
                  videoData && <VideoContainer key={videoData.id} data={videoData}/>
              }
            
          </Box>
          <Box sx={{minWidth: '320px', width: { xs: "initial", md: "300px"},  ml: { xs: 0, md: 1}}}>
            {
                chapters.map((item) => {
                  console.log(item === videoData);
                    return (
                        <SideCard
                          key={item.id}
                          selected={item === videoData}
                          title={item.title}
                          icon={item.icon}
                          time={item.time}
                          onClick={() => {
                            setVideoData(item);
                        }}/>
                    )
                })
            }
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
