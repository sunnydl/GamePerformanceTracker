import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Unfound() {
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
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Oh no!
                We can't find that user!
              </Typography>
            </Container>
            
            <Container maxWidth="sm">
                <Typography variant="h3" align="center" color="text.primary" paragraph>
                    Search Again?
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    We couldn’t find a match for user x in region y. Please verify that user 
                    x belongs to the specified region. For more information on regions, 
                    please follow the link below.
                </Typography>
            </Container>
          </Box>
        </main>
    </ThemeProvider>
  );
}

export default Unfound;
