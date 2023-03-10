import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';
import DrawerComponent from '../DrawerComponent/DrawerComponent';

const NavBar = ({ links }) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const ismatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar
      sx={{
        backgroundImage:
          ' linear-gradient(0deg, rgba(79,195,34,1) 12%, rgba(215,204,11,1) 99%)',
      }}
    >
      <Toolbar>
        {ismatch ? (
          <>
            <Typography>
              <PixIcon />
            </Typography>
            <DrawerComponent links={links} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={2}>
              <Typography>
                <PixIcon />
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Tabs
                textColor="inherit"
                value={value}
                indicatorColor="secondary"
                onChange={(e, val) => setValue(val)}
              >
                {links.map((link, index) => {
                  console.log('link=', link);
                  return <Tab key={index} label={link} />;
                })}
              </Tabs>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: 'auto', background: 'rgba(79,195,34,1)' }}
                  variant="contained"
                >
                  Login
                </Button>
                <a href="/signup">
                  <Button
                    sx={{ marginLeft: 1, background: 'rgba(79,195,34,1)' }}
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </a>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
