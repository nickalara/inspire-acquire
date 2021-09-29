import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';


export default function Contact() {
  return (
    <Box>
      <Typography variant="h2" fontWeight="bold">
        Contact Us
      </Typography>
      <Card>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  label="Your Name"
                  placeholder="Enter your name..."
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  label="Company"
                  placeholder="Enter your company name..."
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  label="Your Email"
                  placeholder="Enter your email address..."
                  required
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  label="Phone number"
                  placeholder="Enter your phone..."
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Subject"
                  placeholder="Enter a subject line..."
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  placeholder="Write us your message..."
                  required
                  rows="4"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}