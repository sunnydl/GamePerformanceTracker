import React, { useState } from 'react';

import { styled } from '@mui/material/styles';

import MatchOptions from './components/MatchOptions/MatchOptions';
import MatchList from './components/MatchList/MatchList';

export const MatchHistoryWrapper = styled('div')(({ theme }) => ({
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

const options = [3, 5, 10];

export default function MatchHistory() {
    const [option, setOption] = useState(options[0]);

    return (
        <MatchHistoryWrapper>
            <MatchOptions options={options} setOption={setOption} />
            <MatchList size={option} />
        </MatchHistoryWrapper>
    );
}
