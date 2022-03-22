import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import { getChapterMeta, getMyCourses } from "../api";
import Button from "@mui/material/Button";
import Details from "../components/Details";
import Close from "@mui/icons-material/Close";



export default function CourseDetail({item, id, isMine}) {

    const [data, setData] = useState(item);
    const [loading, setLoading] = useState(false);
    const [openItem, setOpenItem] = useState(false);
    const [mine, setMine] = useState(isMine);

    useEffect(() => {
        if(!data) {
            setLoading(true);
            console.log('YOYO');
            Promise.all([getChapterMeta(id), getMyCourses()])
                .then(([val, myCourses]) => {
                    console.log('PLING', val);
                    if(myCourses.indexOf(id) !== -1) {
                        setMine(true)
                    }
                    setLoading(false);
                    setData(val);
                });    
        }
        
    }, [id, data]);

  
  const displayData = data || {};
  const chapters = displayData.chapters || [];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {
            loading && <LinearProgress sx={{my: 2}}/>
        }
        <Box sx={{background: '#349adb', p: 5, borderTopLeftRadius: 40, borderTopRightRadius: 40, display: 'flex', justifyContent: 'center', color: 'white'}}>
           <Typography variant="h4" component="div">
                {displayData.title || 'No Data Available'}
            </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', background: 'white', p: 2, border: '1px solid #349adb'}}>
           <Button size="small" variant="contained" color={mine ? "primary" : "success"} sx={{ml: 1}}>
              {mine ? 'Watch' : `Buy for ₹${displayData.price}`}
            </Button>
        </Box>

        {
            chapters.map((item) => {
                return (
                    <Box sx={{background: 'white', mt: 2, display: 'flex', alignItems:'center'}} key={item.id}>
                        <Box
                            component="img"
                            sx={{
                            height: 70,
                            width: 120,
                            }}
                            alt=""
                            src={item.icon}
                        />
                        <Box sx={{p: 2}}>
                            <Box>
                                {item.title}
                            </Box>
                            <Box>
                                <Button sx={{p:0}} onClick={() => {
                                    setOpenItem(item);
                                }}>DETAILS</Button>
                            </Box>
                        </Box>
                    </Box>
                );
            })
        }

      </Container>
      <Drawer
        anchor='right'
        open={!!openItem}
        onClose={() => {
            setOpenItem(false)
        }}
        >
            <Box
            sx={{
                width: 400
            }}>
                <Box sx={{pt: 2, pr: 2, display: 'flex', justifyContent: 'flex-end'}}>
                    <Close sx={{cursor: 'pointer'}} onClick={() => {
                        setOpenItem(false);
                    }}/>
                </Box>
                <Details data={openItem}/>
            </Box>
        </Drawer>
    </React.Fragment>
  );
}
