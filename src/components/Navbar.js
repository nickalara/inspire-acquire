import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="sticky"
          sx={{ background: 'indigo' }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span style={{ fontFamily: 'Molle' }}>Inspire Acquire</span>
            </Typography>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: -1 }}
            >
              <AccountCircleIcon color="inherit" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}