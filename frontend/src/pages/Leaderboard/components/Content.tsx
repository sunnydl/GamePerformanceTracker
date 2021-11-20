import React from 'react';

import TopSection from './TopSection';
import PlayerList from './PlayerList';

import {
    LeaderboardPaper
} from './style'

export default function Content() {
    return (
        <LeaderboardPaper>
            <TopSection />
            <PlayerList />
        </LeaderboardPaper>
    )
}
