import React, { useEffect, useState } from 'react'
import { getVideoMeta } from '../api';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PointList from './PointList';

export default function Details(props) {
    const {
        selected,
        videoId,
    } = props;

    const [data, setData] = useState({});

    useEffect(() => {
        if(selected && !data.title) {
            getVideoMeta(videoId)
                .then((data) => {
                    setData(data);
                });
        }
    }, [data, selected, videoId]);


    console.log(data);
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
