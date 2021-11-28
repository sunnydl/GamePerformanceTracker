import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { Box, Button, AppBar, Toolbar, IconButton, Tab } from '@mui/material';
import { NavBarTabs } from './style';
import SummonerSearchBar from './SummonerSearchBar';

function NavBar() {
  const location = useLocation();
  const summonerFound = useAppSelector((state) => state.user.summonerFound);

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
          <NavBarTabs value={false}>
            <Tab label='overview' component={Link} to={`/overview${location.search}`} disabled={!summonerFound} />
            <Tab label='Match History' component={Link} to={`/match-history${location.search}`} disabled={!summonerFound} />
            <Tab label='Leaderboard' component={Link} to={`/leaderboard${location.search}`} />
            <Tab label='Champion' component={Link} to={{ pathname: "https://www.leagueoflegends.com/en-us/champions/" }} target="_blank"/>
          </NavBarTabs> 
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
