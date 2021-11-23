import React from 'react';

import TopSection from './TopSection';
import PlayerList from './PlayerList';

import {
    LeaderboardPaper
} from './style'

/**
 * Returns a functional component of the leaderboard page that 
 * displays the two leaderboard content components.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function Content() {
    return (
        <LeaderboardPaper>
            <TopSection />
            <PlayerList />
        </LeaderboardPaper>
    )
}
