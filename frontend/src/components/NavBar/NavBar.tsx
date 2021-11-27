
import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import Button from '@mui/material/Button';

import SummonerSearchBar from './SummonerSearchBar';

function NavBar() {
  const location = useLocation();

  return (
      <AppBar position='sticky' color='secondary' elevation={0}> 
        <Toolbar variant='regular' sx={{display: 'flex', flexWrap: 'wrap', width: '90%', padding: 'auto', margin: 'auto'}}>
          <IconButton
            size='medium'
            edge='start'
            color='default'
            aria-label='menu'
            sx={{ mr: 5 }}
            component={Link}
            to='/'
          >
            GPT {/* TODO: add icon */}
          </IconButton>
          <Box sx={{ flexGrow: 0.05 }} />
          <Tabs value={false} style={{ margin: 'auto' }}>
            <Tab style={{ color: 'inherit' }} label='overview' component={Link} to={`/overview${location.search}`} />
            <Tab style={{ color: 'inherit' }} label='Match History' component={Link} to={`/match-history${location.search}`} />
            <Tab style={{ color: 'inherit' }} label='Leaderboard' component={Link} to={`/leaderboard${location.search}`} />
            <Tab style={{ color: 'inherit' }} label='Champion' component={Link} to={{ pathname: "https://www.leagueoflegends.com/en-us/champions/" }} target="_blank"/>
          </Tabs> 
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
      </AppBar>
  );
}

export default NavBar;
