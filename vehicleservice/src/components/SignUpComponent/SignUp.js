import {
  Box,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers';

const SignUp = () => {
  const [name, setName] = useState('');
  const [pwd, setPassword] = useState('');
  const [confirmpwd, setConfirmPassword] = useState('');
  const [dob, setDob] = useState(new Date());
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const signup = () => {
    console.log('here in signup fn');
    Axios.post('http://localhost:3001/signup', {
      name: name,
      dob: dob,
      email: email,
      address: address,
      photo: image,
      password: pwd,
    }).then((response) => {
      navigate('/login');
    });
    navigate('/login');
  };

  //console.log(name, dob, email, address, image);

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
            Sign Up
          </Typography>

          <TextField
            variant="outlined"
            label="Name"
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <TextField
            id="date"
            label="DoB"
            type="date"
            defaultValue="1950-05-24"
            sx={{ width: 350, marginTop: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />

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
          <TextField
            variant="outlined"
            label="Confirm Password"
            type="password"
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Address"
            multiline
            rows={5}
            rowsMax={10}
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></TextField>
          <label htmlFor="upload-photo" />
          <TextField
            name="upload-photo"
            type="file"
            sx={{ width: 350, marginTop: 2 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          ></TextField>

          <Button onClick={() => signup()}>Sign Up</Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
