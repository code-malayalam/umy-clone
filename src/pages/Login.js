import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import TopBar from '../components/TopBar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function Login({text}) {


  return (
    <React.Fragment>
      <TopBar title="Login"/>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            p: 5,
            flexDirection: { xs: "column", md: "row", justifyContent: 'center' },
          }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant="h6" gutterBottom component="div">
                Login
              </Typography>
              <TextField label="Enter yout phone number" variant="outlined" sx={{mt:1, width: '35ch' }}/>
              <Button variant="contained" sx={{mt: 3, width: 200}} >Get OTP</Button>
            </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
