import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

import { Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Overview from './pages/Overview';

import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, IconButton, Tabs, Tab, InputBase } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SearchIcon from '@mui/icons-material/Search';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setUserData } from './redux/slices/user';

// NOTE: my current backend setup uses port 5000
const API_URL = 'http://localhost:5000/api/';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function App() {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);

      const summonerName = params.get('summonerName');
      if (summonerName) {
        axios.get(API_URL + 'summonerInfo', {
          params: {
            summonerName: summonerName,
          }
        })
        .then((res) => {
          const userData = res.data;
          console.log('user found:', userData);
          dispatch(setUserData(userData));
        })
        .catch((err) => {
          console.log('user not found:\n', err.response || err);
          dispatch(setUserData({}));
        });
      }
    }
  }, [location.search]);

  const handleSummonerSearchByName = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      const element = e.target as HTMLInputElement;
      const searchName = element.value;

      if (searchName) {
        console.log('searching for:', searchName, location);
        history.push({
          pathname: location.pathname,
          search: new URLSearchParams({
            summonerName: searchName,
          }).toString(),
        });
      }  
    }
  }

  return (
    <React.Fragment>
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

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleSummonerSearchByName}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Tabs variant='scrollable' textColor='inherit'>
            <Tab label='Overview' component={Link} to={`/overview${location.search}`} />
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
    </React.Fragment>
  );
}

export default App;
