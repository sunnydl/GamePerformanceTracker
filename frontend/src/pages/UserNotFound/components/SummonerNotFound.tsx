import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
function SummonerNotFound() {
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

    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    const summonerName = params.get('summonerName');
    const region = params.get('region') ?? "NA"; // Defaults to NA region
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main data-testid="NotFound" >
          <Box
            sx={{
              bgcolor: 'background.paper',
              pb: 2,
            }}
          >
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" color="text.primary" paragraph>
                    Search Again?
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    We couldn’t find a match for user {summonerName} in region {region}. 
                    Please verify that user {summonerName} belongs to the specified region. 
                    For more information on regions, please follow the link below.
                </Typography>
            </Container>
          </Box>
        </main>
    </ThemeProvider>
  );
}

export default SummonerNotFound;