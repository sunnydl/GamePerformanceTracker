import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MatchHistory from '.';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

import { getTopChamps } from './components/MatchListSummary/MatchChamps';
import { MatchState, ChampPerformanceSummary } from '../../interfaces';

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
});

test('top champs function', () => {
    const mockMatches: MatchState[] = ['A', 'B', 'B', 'B', 'C', 'C', 'D'].map(
        (val, idx) => ({
            gameMode: val,
            gameDate: val,
            win: true,
            role: val,
            championName: val,
            kills: idx,
            deaths: idx,
            assists: idx,
            gptScore: idx,
            visionPerMin: idx,
            csPerMin: idx,
            dmgPerMin: idx,
            visionAmt: idx,
            csAmt: idx,
            dmgAmt: idx,
        })
    );
    const topChamps: ChampPerformanceSummary[] = getTopChamps(mockMatches);

    // Test top champs length (should not exceed 3)
    expect(topChamps.length).toBe(3);

    // Test top champs sort order
    expect(topChamps[0].championName).toBe('B');
    expect(topChamps[1].championName).toBe('C');
    expect(topChamps[2].championName).toBe('A');

    // Test number of matches
    expect(topChamps[0].matches).toBe(3);
    expect(topChamps[1].matches).toBe(2);
    expect(topChamps[2].matches).toBe(1);

    topChamps.forEach((champ) => {
        // Test number of wins (should not exceed matches)
        expect(champ.wins).toBeLessThanOrEqual(champ.matches);

        // Test kda values (should not be negative)
        expect(champ.kills).toBeGreaterThanOrEqual(0);
        expect(champ.deaths).toBeGreaterThanOrEqual(0);
        expect(champ.assists).toBeGreaterThanOrEqual(0);
    });
});
