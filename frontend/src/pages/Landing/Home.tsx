import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FeaturePanel from './components/FeaturePanel';
import SummonerSearchBar from '../../components/NavBar/SummonerSearchBar';

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
      <main data-testid="home" >
        <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 2,
          }}
        >
          <Container maxWidth="md">
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
              <SummonerSearchBar />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ pt: 5, pb: 20 }} maxWidth="lg">
          <Grid container columnSpacing={10}>
            <Grid item xs={3}>
              <FeaturePanel
                image="https://i.imgur.com/iU6pl6h.png"
                name="Track Performance"
              />
            </Grid>
            <Grid item xs={3}>
              <FeaturePanel
                image="https://i.imgur.com/SbcxL3u.png"
                name="Analyze Matches"
              />
            </Grid>
            <Grid item xs={3}>
              <FeaturePanel
                image="https://i.imgur.com/DS6YskR.png"
                name="Leaderboarding"
              />
            </Grid>
            <Grid item xs={3}>
              <FeaturePanel
                image="https://i.imgur.com/qXXlOg2.png"
                name="Evaluate Champions"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Home;
