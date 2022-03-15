import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PointList from './PointList';

export default function Details({data = {}}) {
    console.log('*** ', data);
    return (
        <Paper elevation={0} sx={{p: 2}} >
            <Typography variant="h5" gutterBottom component="div">
                {data.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {data.descr}
            </Typography>
            <div>
                <PointList {...data} />
            </div>
        </Paper>
    )
}
