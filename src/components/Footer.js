import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="http://inspireacquire.com/">
        Inspire Acquire, LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h4" gutterBottom>
          Let's shake hands.
        </Typography>
        <Typography variant="h6" component="h5" gutterBottom sx={{ textAlign: 'left' }}>
          Hours<br />
          Monday—Friday: 9:00AM–5:00PM<br />
          Saturday: 9:00AM–3:00PM<br /><br />
          <span>Address</span><br />
          1601 N. Sepulveda Blvd #384<br />
          Manhattan Beach, CA 90266
        </Typography>
        <Typography variant="body1">Social media links and/or phone number</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            placeholder text
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}