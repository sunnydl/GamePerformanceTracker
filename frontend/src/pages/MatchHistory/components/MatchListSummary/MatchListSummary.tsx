import React from 'react';

import Grid from '@mui/material/Grid';

import MatchChamps from './MatchChamps';
import MatchChart from './MatchChart';

function MatchListSummary({ size }: { size: number }) {
    return (
        <Grid container>
            <Grid item xs={3}>
                <MatchChamps size={size} />
            </Grid>
            <Grid item xs={9}>
                <MatchChart size={size} />
            </Grid>
        </Grid>
    );
}

export default MatchListSummary;