import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import { Box, AppBar, Toolbar, IconButton, Tabs, Tab } from '@mui/material';

import Home from './pages/Home';
import Overview from './pages/Overview';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function App() {
  return (
    <BrowserRouter>
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

          <Box sx={{ flexGrow: 1 }} />

          <Tabs variant='scrollable' textColor='inherit'>
            <Tab label='Overview' component={Link} to='/overview' />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/overview'>
          <Overview />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
