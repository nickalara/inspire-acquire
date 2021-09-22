import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box>
      <Typography variant="h1" component="div" gutterBottom>
        {/* Might use this sx for this Typography*/}
        {/* sx={{ height: '100vh' }} */}
        Inspire Acquire
      </Typography>
    </Box>
  );
}