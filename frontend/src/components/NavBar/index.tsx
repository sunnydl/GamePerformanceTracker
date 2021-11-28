import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { Box, AppBar, Toolbar, IconButton, Tab, FormControlLabel, Switch } from '@mui/material';
import { NavBarTabs } from './style';
import SummonerSearchBar from './SummonerSearchBar';

function NavBar({ mode, setMode }: { mode: boolean, setMode: React.Dispatch<React.SetStateAction<boolean>> }) {
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
          <FormControlLabel
            label='Dark Mode'
            control={<Switch checked={mode} onChange={() => setMode((prevMode) => !prevMode)} />}
          />
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;
