import React, { useEffect, useState } from 'react'
import { getDiscussions } from '../api';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Ask(props) {
    const {
        selected,
        videoId,
    } = props;

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        if(selected && !data.length) {
            getDiscussions(videoId)
                .then((data) => {
                    setData(data);
                });
        }
    }, [data, selected, videoId]);


    return (
        <Paper elevation={0} sx={{p: 2}} >
            <TextField
                label="Ask"
                fullWidth
                multiline
                rows={3}
                value={value}
                onChange={(evt) => {
                    setValue(evt.target.value)
                }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button variant="contained" sx={{mt: 1}}>ASK</Button>
            </Box>
            {
                data.map((item) => {
                    return (
                        <Box
                            key={item.text}
                            sx={{
                                    background: item.owner ? '#d6ebf9' : '#efefef',
                                    mt: 1,
                                    ml: item.owner ? 4 : 0,
                                    p: 2
                                }}>
                            {item.text}
                        </Box>
                    );
                })
            }
        </Paper>
    )
}
