import React from 'react';
import { render, screen } from '@testing-library/react';
import Leaderboard from '.'
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test('renders learn react link', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <Leaderboard />
            </Router>
        </Provider>
    );
    // check if heading is rendered
    const leaderboardHeading = screen.getByTestId('leaderboard heading');
    expect(leaderboardHeading).toBeInTheDocument();

    // Test heading text
    expect(leaderboardHeading).toHaveTextContent('Top');

    // check if the leaderboard content component is rendered
    const leaderboardContent = screen.getByTestId('leaderboard content');
    expect(leaderboardContent).toBeInTheDocument();

    // check if the leaderboard selectors component is rendered
    const leaderboardSelectors = screen.getByTestId('leaderboard selectors');
    expect(leaderboardSelectors).toBeInTheDocument();
});
