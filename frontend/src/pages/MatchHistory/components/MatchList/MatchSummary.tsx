import React from 'react';

import { Grid } from '@mui/material';
import { MatchSummaryGrid } from './style';

function MatchSummary({ position, lane, gamemode, date }: { position: number, lane: string, gamemode: string, date: string }) {
    return (
        <MatchSummaryGrid container>
            <Grid xs={1} item>{position}</Grid>
            <Grid xs={3} item>{lane}</Grid>
            <Grid xs={4} item>{gamemode}</Grid>
            <Grid xs={4} item>{date}</Grid>
        </MatchSummaryGrid>
    );
            
}

export default MatchSummary;
