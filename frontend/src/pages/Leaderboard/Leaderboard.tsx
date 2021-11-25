import React, { useState, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchLeaderboardData } from '../../redux/slices/leaderboard';

import { Grow } from '@mui/material';
import { styled } from '@mui/material/styles';

import TopSection from './components/TopSection';
import PlayerList from './components/PlayerList';
import PageLoading from '../../components/PageLoading';

const LeaderboardWrapper = styled('div')(() => ({
    padding: '20px',
    minHeight: '1200px',
    height: 'fit-content',
}))

const LeaderboardPaper = styled('div')(() => ({
    backgroundColor: '#F2F7FD',
    borderRadius: '71px',
    minHeight: '1100px',
    height: 'fit-content',
}))

/**
 * Returns a functional component of the leaderboard page that 
 * displays the two leaderboard content components.
 * 
 * @returns {JSX.Element} The functional component.
 */
export default function LeaderBoard() {
    const dispatch = useAppDispatch();
    const { tier, division, queueType } = useAppSelector((state) => state.leaderboard);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchLeaderboardData(tier, division, queueType))
        .then(() => {
            setLoading(false);
        });
    }, [tier, division, queueType, dispatch])

    return (
        <LeaderboardWrapper>
            <LeaderboardPaper data-testid="leaderboard content">
                <TopSection />
                {loading ? (
                    <PageLoading />
                ) : (
                    <Grow in={!loading}>
                        <div>
                            <PlayerList />
                        </div>
                    </Grow>
                )}
            </LeaderboardPaper>
        </LeaderboardWrapper>
    )
}
