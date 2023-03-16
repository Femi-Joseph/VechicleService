import {
  Box,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');

  const login = () => {
    console.log('here in login fn');
    Axios.post('http://localhost:3001/login', {
      email: email,

      password: pwd,
    }).then((response) => {
      console.log('response=', response);
      if (response.data.length === 1) {
        navigate('/dashboard');
      }
    });
  };
  console.log(email, pwd);
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={'column'}
          maxWidth={400}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={'10px 10px 10px 10px #9bea61'}
          sx={{ ':hover': { boxShadow: '15px 15px 15px 20px #ccc' } }}
        >
          <Typography variant="h4" padding={2} textAlign="center">
            Login
          </Typography>

          <TextField
            variant="outlined"
            label="Email"
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <Button onClick={() => login()}>Login</Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
