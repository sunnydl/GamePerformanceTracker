import { render, screen } from '@testing-library/react';
import SummonerSearchBar from './SummonerSearchBar';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

test("searchBar test", () => {
    render(
        <Provider store={store}>
            <SummonerSearchBar />
        </Provider>
    );

    const Search = screen.getByTestId('Search');
    expect(Search).toBeInTheDocument();

    //check for search Icon Wrapper
    expect(screen.getByTestId('SearchIconWrapper')).toBeInTheDocument();
});

