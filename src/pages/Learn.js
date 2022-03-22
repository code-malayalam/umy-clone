import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SideCard from "../components/SideCard";
import VideoContainer from "../components/VideoContainer";
import { getChapterMetaWithId } from "../api";
import _ from "lodash";

export default function Learn({ courseId }) {
  const [videoData, setVideoData] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    getChapterMetaWithId(courseId).then((vals) => {
      setData(vals);
      const chapters = vals?.chapters;
      if (chapters && chapters.length) {
        setVideoData(chapters[0]);
      }
    });
  }, [courseId]);

  const chapters = data?.chapters || [];

  const isFirst = _.first(chapters) === videoData;
  const isLast = _.last(chapters) === videoData;

  const onNext = () => {
    if (videoData) {
      const index = chapters.findIndex((item) => {
        return item.id === videoData.id;
      });
      if(chapters[index + 1]) {
          setVideoData(chapters[index + 1]);
      }
    }
  };

  const onPrev = () => {
    if (videoData) {
        const index = chapters.findIndex((item) => {
          return item.id === videoData.id;
        });
        if(chapters[index - 1]) {
            setVideoData(chapters[index - 1]);
        }
      }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#efefef",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {videoData && (
              <VideoContainer
                key={videoData.id}
                data={videoData}
                isFirst={isFirst}
                isLast={isLast}
                onNext={onNext}
                onPrev={onPrev}
              />
            )}
          </Box>
          <Box
            sx={{
              minWidth: "320px",
              width: { xs: "initial", md: "300px" },
              ml: { xs: 0, md: 1 },
            }}
          >
            {chapters.map((item) => {
              return (
                <SideCard
                  key={item.id}
                  selected={item === videoData}
                  title={item.title}
                  icon={item.icon}
                  time={item.time}
                  onClick={() => {
                    setVideoData(item);
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
