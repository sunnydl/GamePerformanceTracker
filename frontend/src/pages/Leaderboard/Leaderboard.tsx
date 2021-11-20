import React, { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchLeaderboardData } from '../../redux/slices/leaderboard';

import { styled } from '@mui/material/styles';

import Content from './components/Content';

const LeaderboardWrapper = styled('div')(() => ({
    padding: '20px',
    minHeight: '1200px',
    height: 'fit-content',
}))

export default function LeaderBoard() {

    const dispatch = useAppDispatch();
    const leaderBoardState = useAppSelector((state) => state.leaderboard);
    const tier = leaderBoardState.tier;
    const division = leaderBoardState.division;
    const queueType = leaderBoardState.queueType;

    useEffect(() => {
        dispatch(fetchLeaderboardData(tier, division, queueType))
    }, [tier, division, queueType, dispatch])

    return (
        <LeaderboardWrapper>
            <Content/>
        </LeaderboardWrapper>
    )
}
