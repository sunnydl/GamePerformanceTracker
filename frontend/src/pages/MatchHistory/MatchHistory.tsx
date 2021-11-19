import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';

import MatchOptions from './components/MatchOptions/MatchOptions';
import MatchListSummary from './components/MatchListSummary/MatchListSummary';
import MatchList from './components/MatchList/MatchList';

import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMatchesData } from '../../redux/slices/matches';

const MatchHistoryWrapper = styled('div')(({ theme }) => ({
    width: '90%',
    margin: 'auto',
    marginBottom: theme.spacing(16),

    '& > *': {
        marginBottom: theme.spacing(4)
    },

    '& *': {
        textAlign: 'center'
    }
}));

const MatchHeading = styled('div')(({ theme }) => ({
    ...theme.typography.h3,
    marginBottom: theme.spacing(4),
    textAlign: 'left'
}));

const options = [3, 5, 10];

export default function MatchHistory() {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [option, setOption] = useState(options[0]);

    // NOTE: temporary api call for testing
    useEffect(() => {
        dispatch(fetchMatchesData(location.search, 10));
    }, [location, dispatch])

    return (
        <MatchHistoryWrapper data-testid='match-history'>
            <MatchOptions options={options} setOption={setOption} />
            <MatchHeading>Recent Matches</MatchHeading>
            <MatchListSummary size={option} />
            <MatchList size={option} />
        </MatchHistoryWrapper>
    );
}
