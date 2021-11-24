import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

function TopSection() {
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
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar 
                src={`${process.env.PUBLIC_URL}/UserNotFound.jpg`} 
                sx={{ width: 150, height: 150 }} 
                style={{alignSelf: 'center'}}/>
            </Stack>
          </Box>
        </main>
        
    </ThemeProvider>
  );
}

export default TopSection;
