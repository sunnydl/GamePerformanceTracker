import React from 'react';

import { Grid, Typography } from '@mui/material';
import { MatchStatisticsGrid } from './style';

function MatchStatistics() {
    return (
        <MatchStatisticsGrid container>
            <Grid item xs={4}>
                <div>
                    <Typography variant='h6'>Stats/Min</Typography>
                    <Typography variant='body2'>Details</Typography>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <Typography variant='h6'>Stats/Min</Typography>
                    <Typography variant='body2'>Details</Typography>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <Typography variant='h6'>Stats/Min</Typography>
                    <Typography variant='body2'>Details</Typography>
                </div>
            </Grid>
        </MatchStatisticsGrid>
    );
}

export default MatchStatistics;
