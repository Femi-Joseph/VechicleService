import { Box, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const validate = Yup.object({
    email: Yup.string().email('Email is Invalid').required('Email required'),
    password: Yup.string().required('Password Required'),
  });

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
  //console.log(email, pwd);
  const onSubmit = (values) => {
    console.log(values);

    Axios.post('http://localhost:3001/login', {
      email: values.email,

      password: values.password,
    }).then((response) => {
      console.log('response=', response);
      if (response.data.length === 1) {
        navigate('/dashboard');
      }
    });
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
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
              <Field
                as={TextField}
                label="Email"
                name="email"
                fullWidth
                helperText={
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                fullWidth
                helperText={
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>
                }
              />

              {/*<Button onClick={() => login()}>Login</Button>*/}
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                SignIn
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
