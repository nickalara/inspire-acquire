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
      alignItems: 'center',
      backgroundAttachment: 'scroll',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/newyork-city.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      height: '115vh',
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
            color: '#000',
            fontWeight: 'bold',
            height: '100%',
            paddingTop: '58px',
            textShadow: '3px, 3px, 5px, #000',
            width: '100%',
          }}
        >
          why we aspire
          <Typography
            variant="body1"
            component="h6"
            gutterBottom
            sx={{
              backgroundColor: 'rgba(255,255,255,0.79)',
              fontSize: '1.1rem',
              textAlign: 'left',
              marginTop: '30px',
              padding: '27px 33px',
              width: 'auto',
            }}
          >
            Our goal is to provide you with quality and actionable potential.<br />
            <br />
            This is where our competitors fail.<br />
            <br />
            Every chance we get, we look for opportunities to achieve greater efficiency.<br />
            <br />
            We don't just hope for a good conversion rate...<br />
            <br />
            <strong style={{ textTransform: 'uppercase', }}
            >We engineer it.</strong><br />
            <br />
          </Typography>
        </Typography>
      </Slide>
    </Box >
  );
}