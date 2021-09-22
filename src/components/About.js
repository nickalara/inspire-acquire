import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Slide } from '@mui/material';

export default function About() {

  // const [checked, setChecked] = React.useState(false);
  // React.useEffect(() => {
  //   setChecked(true);
  // }, []);

  return (
    <Box sx={{
      alignItems: 'center',
      backgroundAttachment: 'fixed',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/teamwork.jpg'})`,
      backgroundPositionX: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
    }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          paddingTop: '58px',
          textShadow: '3px, 3px, 5px, #000',
        }}
      >
        Who we are
      </Typography>
      <Typography
        variant="body1"
        component="paragraph"
        gutterBottom
        sx={{
          backgroundColor: 'rgba(0,0,0,0.83)',
          fontSize: '1.18rem',
          maxWidth: '650px',
          padding: '40px 25px',
          textAlign: 'left',
        }}
      >
        We are a unique group of talented sales experts, data translators, information technologists, coffee snobs, growth hackers, and efficiency addicts.<br /><br />

        Our decisions are backed by data. We are perpetually executing, analyzing, and optimizing at every stage of the funnel; online and offline.<br /><br />

        We see beyond just leads and conversions to reach the real human experience that drives engagement and inspires prospects to spend their precious time on your brand.
      </Typography>
    </Box >
  );
}