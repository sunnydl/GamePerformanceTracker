import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './style';

import RegionDropDown from '../NavBar/RegionDropDown';
import { compareIgnoreCase } from '../../util';

const regions = [
    'NA',
    'KR',
    'JP',
    'BR',
    'EUN',
    'EUW',
    'LA1',
    'LA2',
    'OC',
    'TR',
    'RU',
];

/**
 * Returns a functional component of the search bar
 *
 * @returns {JSX.Element} The functional component.
 */
export default function SummonerSearchBar() {
    const [regionIndex, setRegionIndex] = useState(0);
    const history = useHistory();
    const { summonerName = '', region = '' } = useAppSelector(
        (state) => state.user
    );
    const [inputName, setInputName] = useState('');

    const handleSummonerSearchByName = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            const element = e.target as HTMLInputElement;
            const searchName = element.value.trim();
            setInputName('');

            if (!searchName) return;

            const isDifferentSummoner = !(
                compareIgnoreCase(summonerName, searchName) &&
                compareIgnoreCase(region, regions[regionIndex])
            );
            if (isDifferentSummoner) {
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
    };

    return (
        <React.Fragment>
            <Search data-testid='Search'>
                <SearchIconWrapper data-testid='SearchIconWrapper'>
                    <SearchIcon data-testid='SearchIcon' />
                </SearchIconWrapper>
                <div data-testid='StyledInputBase'>
                    <StyledInputBase
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                        onKeyPress={handleSummonerSearchByName}
                        value={inputName}
                        onChange={(
                            event: React.ChangeEvent<
                                HTMLTextAreaElement | HTMLInputElement
                            >
                        ) => setInputName(event.target.value)}
                    />
                </div>
            </Search>
            <div data-testid='RegionDropDown'>
                <RegionDropDown
                    options={regions}
                    selectedIndex={regionIndex}
                    onSelect={setRegionIndex}
                />
            </div>
        </React.Fragment>
    );
}
