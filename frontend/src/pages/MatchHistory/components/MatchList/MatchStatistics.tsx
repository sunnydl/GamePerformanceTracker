import React from 'react';
import Typography from '@mui/material/Typography';
import { MatchStatisticsWrapper } from './style';

interface MatchStatisticsProps {
    title: string;
    amount: number;
    rate: number;
}

/**
 * Returns a functional component of the match history page that displays
 * a specific data point of a match.
 *
 * @param {string} title The title to display.
 * @param {number} amount The summoner's total value of that data point.
 * @param {number} rate The summoner's average amount per minute of that data point.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchStatistics({
    title,
    amount,
    rate,
}: MatchStatisticsProps) {
    return (
        <MatchStatisticsWrapper>
            <Typography variant='subtitle2'>
                {rate.toFixed(2)} {title}
            </Typography>
            <Typography variant='caption'>{amount}</Typography>
        </MatchStatisticsWrapper>
    );
}
