import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

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

function ExtraLink(){
    return (
    <ThemeProvider theme={theme}>
        <Stack
            sx={{ pt: 0 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <Button 
                color="secondary" 
                variant="contained" 
                component={Link} to={{pathname: "https://leagueoflegends.fandom.com/wiki/Region_(Legends_of_Runeterra)"}} target="_blank">
                    Learn More
            </Button>
        </Stack>
    </ThemeProvider>
  );
}

export default ExtraLink;

