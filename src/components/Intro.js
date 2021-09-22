import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Slide } from '@mui/material';

export default function Intro() {

  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box sx={{
      // alignItems: 'center',
      backgroundAttachment: 'scroll',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/madrid-city.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
    }}>
      <Slide
        direction="up"
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        mountOnEnter unmountOnExit
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            backgroundColor: 'rgba(0,0,0,1)',
            color: '#fff',
            fontWeight: 'bold',
            mixBlendMode: 'overlay',
            padding: '50px',
            textShadow: '3px, 3px, 5px, #000',
          }}
        >
          inspire acquire
          <Typography
            variant="h6"
            component="h6"
            gutterBottom
            sx={{
              color: '#fff',
            }}
          >
            Inspire Acquire, LLC. <br />
            Optimizing human engagement from clicks to handshakes.
          </Typography>
        </Typography>
      </Slide>
    </Box >
  );
}