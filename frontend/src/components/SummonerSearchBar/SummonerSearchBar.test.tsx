import { render, screen } from '@testing-library/react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import SummonerSearchBar from '.';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <SummonerSearchBar />
        </Provider>
    );

    // check if search bar and its components is rendered
    const Search = screen.getByTestId('Search');
    expect(Search).toBeInTheDocument();
    expect(screen.getByTestId('SearchIconWrapper')).toBeInTheDocument();
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
    expect(screen.getByTestId('StyledInputBase')).toBeInTheDocument();

    // check if region drop down is rendered
    const RegionDropDown = screen.getByTestId('RegionDropDown');
    expect(RegionDropDown).toBeInTheDocument();
});
