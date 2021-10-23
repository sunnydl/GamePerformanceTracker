
import React, { useEffect } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { handleSearchParams } from '../redux/slices/user';

import { Link, useLocation } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import SummonerSearchBar from './SummonerSearchBar';

function NavBar() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(handleSearchParams(location.search));
  }, [dispatch, location.search]);

  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <IconButton
          size='small'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          component={Link}
          to='/'
        >
          <AccessAlarmIcon /> {/* TODO: replace temporary icon */}
        </IconButton>

        <SummonerSearchBar />

        <Box sx={{ flexGrow: 1 }} />

        <Tabs value={false} textColor='inherit'>
          <Tab label='overview' component={Link} to={`/overview${location.search}`} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
