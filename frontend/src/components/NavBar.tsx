
import React, { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { handleSearchParams } from '../redux/slices/user';

import { Link, useLocation } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab} from '@mui/material';
import Button from '@mui/material/Button';
//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import SummonerSearchBar from './SummonerSearchBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#18A0FB',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#18A0FB',
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
    <AppBar style={{ background: '#FFFFFF' }} position='sticky'>
      <ThemeProvider theme={theme}>
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
          GPT {/* TODO: replace temporary icon */}
        </IconButton>
        <Box sx={{ flexGrow: 0.05 }} />
        <Tabs value={false} >
          <Tab style={{color:'#18A0FB'}} label='overview' component={Link} to={`/overview${location.search}`} />
          <Box sx={{ flexGrow: 0.05 }} />
          <Tab style={{color:'#18A0FB'}} label='Match History'/>
          <Box sx={{ flexGrow: 0.05 }} />
          <Tab style={{color:'#18A0FB'}} label='Leaderboard'/>
          <Box sx={{ flexGrow: 0.05 }} />
          <Tab style={{color:'#18A0FB'}} label='Champion'/>
        </Tabs> 
        <Box sx={{ flexGrow: 0.5 }} />
        <SummonerSearchBar />
        <Box sx={{ flexGrow: 0.5 }} />
        <Button color="secondary" variant="contained">
          Log in
        </Button>
        <Box sx={{ flexGrow: 0.02 }} />
        <Button color="primary" variant="contained">
          Register
        </Button>
        
      </Toolbar>
      </ThemeProvider>
    </AppBar>
  );
}

export default NavBar;
