import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MatchHistory from './MatchHistory';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

test('match history', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <MatchHistory />
            </Router>
        </Provider>
    );
    const matchHistoryComponent = screen.getByTestId('match-history');
    expect(matchHistoryComponent).toBeInTheDocument();

    // Test header
    expect(matchHistoryComponent).toHaveTextContent('Recent Matches'); 

    // Test options sliders
    expect(screen.getByTestId('match-slider')).toBeInTheDocument();

    // Test summaries
    expect(screen.getByTestId('match-summaries')).toBeInTheDocument();

    // Test list
    expect(screen.getByTestId('match-list')).toBeInTheDocument();
})
