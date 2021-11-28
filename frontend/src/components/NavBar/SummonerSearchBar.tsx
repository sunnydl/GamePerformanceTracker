import React, { useState } from 'react';
import { useAppSelector} from '../../redux/hooks';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './style';

import RegionDropDown from './RegionDropDown';

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
      <RegionDropDown
        options={regions}
        selectedIndex={regionIndex}
        onSelect={setRegionIndex}
      />
    </React.Fragment>
  );
}

export default SummonerSearchBar;
