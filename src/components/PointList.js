import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function PointList({points = [], pointsTitle, links=[]}) {


  return (
    <div>
        {
            points.length && pointsTitle && (
                <Typography sx={{mt: 2}} variant="h7" gutterBottom component="div">
                    {pointsTitle}
                </Typography>
            )
        }
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        dense={true}
        >
        {
        points.map((item) => {
            return (
            <ListItemButton key={item}>
                <ListItemIcon sx={{minWidth: 0}} >
                <ArrowForwardIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary={item} />
            </ListItemButton>
            );
        })
        }
        {
            links.length && (
                <Typography sx={{mt: 2}} variant="h7" gutterBottom component="div">
                    Links to check
                </Typography>
            )
        }
        {
            links.map((item) => {
                return (
                    <div key={item.link}>
                        <Link rel="noopener" target="_blank" href={item.link}>{item.text}</Link>
                    </div>
                );
            })
        }
        </List>
    </div>
  );
}
