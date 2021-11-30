import React from 'react';

import Grid from '@mui/material/Grid';

import MatchChamps from './MatchChamps';
import DataChart from './DataChart';

/**
 * Returns a functional component of the match history page that displays
 * a summary of the recent match history.
 *
 * @param {number} size The number of matches being displayed.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchListSummary({ size }: { size: number }) {
    return (
        <Grid container data-testid='match-summaries'>
            <Grid item xs={3}>
                <MatchChamps size={size} />
            </Grid>
            <Grid item xs={9}>
                <DataChart size={size} />
            </Grid>
        </Grid>
    );
}
