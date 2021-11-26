import React from 'react';
import Typography from '@mui/material/Typography';
import { MatchStatisticsWrapper } from './style';

interface MatchStatisticsProps {
    title: string;
    amount: number;
    rate: number;
}

export default function MatchStatistics({ title, amount, rate }: MatchStatisticsProps) {
    return (
        <MatchStatisticsWrapper>
            <Typography variant='subtitle2'>{rate.toFixed(2)} {title}</Typography>
            <Typography variant='caption'>{amount}</Typography>
        </MatchStatisticsWrapper>
    );
}
