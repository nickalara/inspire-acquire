import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Slide } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Contact from './Contact';

export default function Products() {

  const products = ['Content Creation', 'Social Media Management', 'Search Engine Optimization', 'Email', 'SMS', 'Paid Traffic', 'Revenue Optimization', 'Co-Registration', 'Pay Per Lead/Call', 'Marketing Automation', 'Strategy and Consulting']

  // const [checked, setChecked] = React.useState(false);
  // React.useEffect(() => {
  //   setChecked(true);
  // }, []);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
      height: '200vh',
    }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          textShadow: '3px, 3px, 5px, #000',
        }}
      >
        Products
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: '#000' }}>
        {products.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{ margin: '16px' }}
      >
        Inquire
      </Button>
      <Contact />
    </Box >
  );
}