import React, { useState } from 'react';

import { styled } from '@mui/material/styles';

import MatchOptions from './components/MatchOptions/MatchOptions';
import MatchListSummary from './components/MatchListSummary/MatchListSummary';
import MatchList from './components/MatchList/MatchList';

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
    const [option, setOption] = useState(options[0]);

    return (
        <MatchHistoryWrapper>
            <MatchOptions options={options} setOption={setOption} />
            <MatchHeading>Recent Matches</MatchHeading>
            <MatchListSummary />
            <MatchList size={option} />
        </MatchHistoryWrapper>
    );
}
