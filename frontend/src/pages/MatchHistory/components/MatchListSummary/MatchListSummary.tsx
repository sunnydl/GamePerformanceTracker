import React from 'react';

import Grid from '@mui/material/Grid';

import MatchChamps from './MatchChamps';
import MatchChart from './MatchChart';

function MatchListSummary() {
    return (
        <Grid container>
            <Grid item xs={3}>
                <MatchChamps />
            </Grid>
            <Grid item xs={9}>
                <MatchChart />
            </Grid>
        </Grid>
    );
}

export default MatchListSummary;
