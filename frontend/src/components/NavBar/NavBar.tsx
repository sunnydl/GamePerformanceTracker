
import React, { useEffect } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { handleSearchParams } from '../../redux/slices/user';

import { Link, useLocation } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import Button from '@mui/material/Button';

import SummonerSearchBar from './SummonerSearchBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function NavBar() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleSearchParams(location.search));
  }, [dispatch, location.search]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky'> 
        <Toolbar variant='dense'>
          <IconButton
            size='medium'
            edge='start'
            color='error'
            aria-label='menu'
            sx={{ mr: 5 }}
            component={Link}
            to='/'
          >
            GPT {/* TODO: add icon */}
          </IconButton>
          <Box sx={{ flexGrow: 0.05 }} />
          <Tabs value={false} style={{ color: theme.palette.primary.contrastText }}>
            <Tab style={{ color: 'inherit' }} label='overview' component={Link} to={`/overview${location.search}`} />
            <Tab style={{ color: 'inherit' }} label='Match History'/>
            <Tab style={{ color: 'inherit' }} label='Leaderboard'/>
            <Tab style={{ color: 'inherit' }} label='Champion'/>
          </Tabs> 
          <Box sx={{ flexGrow: 0.5 }} />
          <SummonerSearchBar />
          <Box sx={{ flexGrow: 0.5 }} />
          <Button color="primary" variant="contained">
            Log in
          </Button>
          <Box sx={{ flexGrow: 0.02 }} />
          <Button color="secondary" variant="contained">
            Register
          </Button>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
