import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

import TopSection from './TopSection';
import PlayerList from './PlayerList';
import PageLoading from '../../../components/PageLoading';

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
    const { loading } = useAppSelector(state => state.leaderboard);
    return (
        <LeaderboardPaper data-testid="leaderboard content">
            <TopSection />
            {loading? <PageLoading/>:<PlayerList />}
        </LeaderboardPaper>
    )
}
