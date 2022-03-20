import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import TopBar from "../components/TopBar";
import Alert from "@mui/material/Alert";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { getCourseMeta } from "../api";

const NonPriceItem = ({ item, mine }) => {

  const buy = !mine && item.price;
  const free = !mine && !item.price;

  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.icon || "https://via.placeholder.com/345x140/000000"}
        alt=""
      />
      <CardContent>
       
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descr}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
          {
            free ? (
              <Alert color="info" sx={{py:0, px: 1, width: 100}} icon={false}>
                Free Course
              </Alert>
            ) : <Box />
          }
          <Box sx={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Button size="small" variant="contained" color={buy ? "success" : "primary"} sx={{ml: 1}}>
              {buy ? `Buy for ₹${item.price}` : "Watch"}
            </Button>
            <Button size="small">Learn More</Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
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
  const others = [...all, ...free];

  return (
    <React.Fragment>
      <TopBar title="Courses" />
      <CssBaseline />
      <Container maxWidth="lg">
        {loading && <LinearProgress sx={{ mt: 1 }} />}
        {!!ours.length && (
          <Box>
              <Typography variant="h5" gutterBottom component="div">
                My Courses
              </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              {ours.map((item) => {
                return <NonPriceItem item={item} key={item.id} mine/>;
              })}
            </Box>
          </Box>
        )}

        {!!others.length && (
          <Box>
              <Typography variant="h5" gutterBottom component="div">
                Other Courses
              </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              {others.map((item) => {
                return <NonPriceItem item={item} key={item.id} />;
              })}
            </Box>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
}
