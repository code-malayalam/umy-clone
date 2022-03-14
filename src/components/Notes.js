import React, { useEffect, useState } from 'react'
import { getNotes } from '../api';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Notes(props) {
    const {
        selected,
        videoId,
    } = props;

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if(selected && !data.length) {
            getNotes(videoId)
                .then((data) => {
                    setData(data);
                });
        }
    }, [data, selected, videoId]);


    console.log(data);
    return (
        <Paper elevation={0} sx={{p: 2}} >
            <TextField
                label="Add Notes"
                fullWidth
                multiline
                rows={3}
                value={value}
                onChange={(evt) => {
                    setValue(evt.target.value)
                }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button variant="contained" sx={{mt: 1}}>POST</Button>
            </Box>
            {
                data.map((item) => {
                    return (
                        <Box key={item.text} sx={{ background: '#efefef', mt: 1, p: 2}}>
                            {item.text}
                        </Box>
                    );
                })
            }
        </Paper>
    )
}
