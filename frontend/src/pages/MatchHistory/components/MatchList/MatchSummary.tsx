import React from 'react';

import { Grid } from '@mui/material';
import { MatchSummaryGrid } from './style';

interface MatchSummaryProps {
    rank: number,
    lane: string,
    gameMode: string,
    date: string
}

function MatchSummary({ rank, lane, gameMode, date }: MatchSummaryProps) {
    return (
        <MatchSummaryGrid container>
            <Grid xs={1} item>{rank}</Grid>
            <Grid xs={3} item>{lane}</Grid>
            <Grid xs={4} item>{gameMode}</Grid>
            <Grid xs={4} item>{date}</Grid>
        </MatchSummaryGrid>
    );
            
}

export default MatchSummary;