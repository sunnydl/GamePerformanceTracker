import { render, screen } from '@testing-library/react';
import SummonerSearchBar from './SummonerSearchBar';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { useHistory } from 'react-router-dom';

test("searchBar test", () => {
    render(
        <Provider store={store}>
            <SummonerSearchBar />
        </Provider>
    )

    //see if search bar box
    const searchBarBox = screen.getByTestId('searchBarBox');
    expect(searchBarBox).toBeInTheDocument
})

// test("searchBar mock test", () =>{
//     const mockSummonerInput = "!@#cae@#";

//     const history = useHistory();
//     const check = history.push({
//         pathname: '/overview',
//         search: new URLSearchParams({
//             summonerName: mockSummonerInput,
//             region: 'NA',
//         }).toString(),
//     })

//     expect(check).toBeValid
// })

