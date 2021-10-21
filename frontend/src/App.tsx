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

import { useAppDispatch } from './redux/hooks';
import { setUserData } from './redux/slices/user';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const API_URL = 'api/';

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

const regions = ['NA', 'KR','JP','BR','EUN','EUW','LA1','LA2','OC','TR','RU'];

function App() {
  const history = useHistory();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const summonerName = params.get('summonerName');
      const region = params.get('region');
      console.log(region);
      if (summonerName) {
        axios.get(API_URL + 'summonerInfo', {
          params: {
            summonerName: summonerName,
            region: region,
          }
        })
        .then((res) => {
          const userData = res.data;
          console.log('user found:', userData);
          dispatch(setUserData({summonerFound: true, region: region, ...userData}));
        })
        .catch((err) => {
          console.log('user not found:\n', err.response || err);
          dispatch(setUserData({summonerFound: false, region: region, summonerName: summonerName}));
        });
      }
    }
  }, [location.search, dispatch]);

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
            region:regions[selectedIndex],
          }).toString(),
        });
      }  
    }
  }
  const handleClick = () => {
    console.info(`You clicked ${regions[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

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
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="select region">
               <Button onClick={handleClick}>{regions[selectedIndex]}</Button>
               <Button
                  size="small"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="region button"
                  aria-haspopup="menu"
                  onClick={handleToggle}
               >
                  <ArrowDropDownIcon />
               </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
               {({ TransitionProps, placement }) => (
                 <Grow
                   {...TransitionProps}
                   style={{
                     transformOrigin:
                       placement === 'bottom' ? 'center top' : 'center bottom',
                   }}
                 >
                   <Paper>
                     <ClickAwayListener onClickAway={handleClose}>
                       <MenuList id="split-button-menu">
                         {regions.map((option, index) => (
                           <MenuItem
                             key={option}
                             selected={index === selectedIndex}
                             onClick={(event) => handleMenuItemClick(event, index)}
                           >
                             {option}
                           </MenuItem>
                         ))}
                       </MenuList>
                     </ClickAwayListener>
                   </Paper>
                 </Grow>
               )}
             </Popper>
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
