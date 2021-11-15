import React from 'react';

import { Grid, Typography } from '@mui/material';
import { MatchStatisticsGrid } from './style';

interface MatchStatisticsProps {
    visionAmount: number,
    visionRate: number,
    csAmount: number,
    csRate: number,
    dmgAmount: number,
    dmgRate: number
}

function MatchStatistics({ visionAmount, visionRate, csAmount, csRate, dmgAmount, dmgRate }: MatchStatisticsProps) {
    return (
        <MatchStatisticsGrid container>
            <Grid item xs={4}>
                <div>
                    <Typography variant='subtitle2'>{visionRate.toFixed(2)} Vis/Min</Typography>
                    <Typography variant='caption'>{visionAmount}</Typography>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <Typography variant='subtitle2'>{csRate.toFixed(2)} Cs/Min</Typography>
                    <Typography variant='caption'>{csAmount}</Typography>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div>
                    <Typography variant='subtitle2'>{dmgRate.toFixed(2)} Dmg/Min</Typography>
                    <Typography variant='caption'>{dmgAmount}</Typography>
                </div>
            </Grid>
        </MatchStatisticsGrid>
    );
}

export default MatchStatistics;
