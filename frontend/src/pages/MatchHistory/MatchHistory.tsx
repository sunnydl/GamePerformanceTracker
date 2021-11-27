import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Grow } from '@mui/material';

import MatchOptions from './components/MatchOptions/MatchOptions';
import MatchListSummary from './components/MatchListSummary/MatchListSummary';
import MatchList from './components/MatchList';

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
    textAlign: 'center'
}));

const options = [3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Returns a functional component of the match history page that displays
 * the components for a summoner's recent match history data.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function MatchHistory() {
    const [option, setOption] = useState(options[0]);

    return (
        <Grow in>
            <div>
                <MatchHistoryWrapper data-testid='match-history'>
                    <MatchHeading>Recent Matches</MatchHeading>
                    <MatchOptions options={options} setOption={setOption} />
                    <MatchListSummary size={option} />
                    <MatchList size={option} />
                </MatchHistoryWrapper>
            </div>
        </Grow>
    );
}
