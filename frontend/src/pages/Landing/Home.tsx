import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FeaturePanel from './components/FeaturePanel';

function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#18A0FB',
      },
      secondary: {
        main: '#18A0FB',
        contrastText: '#fff',
      },
      error:{
        main: '#000',
        contrastText: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Game Performance Tracker
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              GPT provides statistical insights to gamers for League of Legends. 
              We are building a platform where gamers can connect, express themselves,
              and share their experiences with players anywhere.
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button data-testid="login-button" color="primary" variant="contained">
                Log in
              </Button>
              <Button data-testid="register-button" color="secondary" variant="contained">
                Register
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ pt: 5, pb: 20 }} maxWidth="md">
          <Grid container rowSpacing={4} columnSpacing={24}>
            <Grid item xs={6}>
              <FeaturePanel
                image="https://i.imgur.com/iU6pl6h.png"
                name="Track Performance"
                desc="See how any player has performed both recently and 
                all-time in different categories, including 
                but not limited to wins, losses, kills, deaths, and assists."
              />
            </Grid>
            <Grid item xs={6}>
              <FeaturePanel
                image="https://i.imgur.com/SbcxL3u.png"
                name="Analyze Matches"
                desc="Identify recent match trends to help
                you determine not just why you're winning but how
                to continue doing so."
              />
            </Grid>
            <Grid item xs={6}>
              <FeaturePanel
                image="https://i.imgur.com/DS6YskR.png"
                name="Leaderboarding"
                desc="Compare your performance against other players worldwide
                using both well-known statistics and our own proprietary GPT score."
              />
            </Grid>
            <Grid item xs={6}>
              <FeaturePanel
                image="https://i.imgur.com/qXXlOg2.png"
                name="Evaluate Champions"
                desc="Examine advanced statistics for different champions and
                analyze per champion-performance to find out where and when
                to use each."
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Home;
