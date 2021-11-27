import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

/**
 * Returns a functional component of the UserNotFound page that has
 * the button provide extra resources about the region.
 * 
 * @returns {JSX.Element} The functional component.
 */

function ExtraLink(){

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
      <main data-testid="ExtraLink" >
        <Container sx={{ pt: 5, pb: 20 }} maxWidth="md">
          <Stack
            sx={{ pt: 0 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button data-testid="extralink-button"
              color="secondary" 
              variant="contained" 
              component={Link} to={{pathname: "https://leagueoflegends.fandom.com/wiki/Servers"}} target="_blank">
                Learn More
            </Button>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default ExtraLink;

