import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import TopBar from "../components/TopBar";
import { Paper } from "@mui/material";
import { getCourseMeta } from "../api";

const NonPriceItem = ({ item, buy }) => {
  return (
    <Paper elevation={0} sx={{ p: 2, mb: 2, display: "flex" }}>
      <Card elevation={0} sx={{ display: "flex", flexGrow: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 70, mr: 3 }}
          image={item.icon}
        />
        <Typography variant="h6" component="div">
          {item.title}
        </Typography>
      </Card>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained" color={buy ? "success" : "primary"}>
          {buy ? `Buy for ₹${item.price}` : "Watch"}
        </Button>
        <Button variant="text" color="primary">
          Details
        </Button>
      </Box>
    </Paper>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getCourseMeta().then((data) => {
      setLoading(false);
      setData(data);
    });
  }, []);

  const ours = data.ours || [];
  const all = data.all || [];
  const free = data.free || [];

  console.log("***", loading);

  return (
    <React.Fragment>
      <TopBar title="Courses" />
      <CssBaseline />
      <Container maxWidth="lg">
        {loading && <LinearProgress sx={{ mt: 1 }} />}
        {!!ours.length && (
          <Box>
            <Box
              sx={{
                display: "flex",
                py: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography variant="h5" gutterBottom component="div">
                My Courses
              </Typography>
            </Box>
            <Box>
              {ours.map((item) => {
                return <NonPriceItem item={item} key={item.id} />;
              })}
            </Box>
            <Divider />
          </Box>
        )}

        {!!free.length && (
          <Box>
            <Box
              sx={{
                display: "flex",
                py: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography variant="h5" gutterBottom component="div">
                Free Courses
              </Typography>
            </Box>
            <Box>
              {free.map((item) => {
                return <NonPriceItem item={item} key={item.id} />;
              })}
            </Box>
          </Box>
        )}

        {!!all.length && (
          <Box>
            <Box
              sx={{
                display: "flex",
                py: 2,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography variant="h5" gutterBottom component="div">
                Buy Courses
              </Typography>
            </Box>
            <Box>
              {all.map((item) => {
                return <NonPriceItem item={item} key={item.id} buy />;
              })}
            </Box>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
}
