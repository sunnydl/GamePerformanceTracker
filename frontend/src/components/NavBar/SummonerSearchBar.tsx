import React, { useState } from 'react';
import { useAppSelector} from '../../redux/hooks';
import { useHistory } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import RegionDropDown from './RegionDropDown';

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
  color: theme.palette.secondary.light,
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.light,
  border: '1px solid',
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

const regions = ['NA','KR','JP','BR','EUN','EUW','LA1','LA2','OC','TR','RU'];

function SummonerSearchBar() {
  const [regionIndex, setRegionIndex] = useState(0);
  const history = useHistory();
  const { summonerName = "", region= ""} = useAppSelector((state) => state.user);
  const handleSummonerSearchByName = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      const element = e.target as HTMLInputElement;
      const searchName = element.value;
    
      if (searchName && (searchName !== summonerName || regions[regionIndex] !== region)) {
        console.log('searching for:', searchName);
        history.push({
          pathname: '/overview',
          search: new URLSearchParams({
            summonerName: searchName,
            region: regions[regionIndex],
          }).toString(),
        });
      }
    }
  }

  return (
    <React.Fragment>
      <Search data-testid ='Search'>
        <SearchIconWrapper data-testid ='SearchIconWrapper'>
          <SearchIcon />
        </SearchIconWrapper>
       <div data-testid ='StyledInputBase'>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={handleSummonerSearchByName}
        />
       </div>
      </Search>
    
      <div data-testid='regionDropDown'>
        <RegionDropDown
          options={regions}
          selectedIndex={regionIndex}
          onSelect={setRegionIndex}
        />
      </div>
    </React.Fragment>
  );
}

export default SummonerSearchBar;
