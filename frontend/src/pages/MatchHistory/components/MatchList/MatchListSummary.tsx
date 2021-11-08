import React from 'react';

import { Avatar, Grid } from '@mui/material';


function MatchListSummary() {
    return (
        <Grid container spacing={2} sx={{ borderTop: '1px solid black' }}>
            <Grid item xs={3}>
                Overall Stats
            </Grid>
            <Grid item xs={3} sx={{ borderLeft: '1px solid black' }}>
                <Avatar src={undefined} sx={{ width: '128px', height: '128px' }} />
            </Grid>
            <Grid item xs={3} sx={{ borderLeft: '1px solid black' }}>
                <Avatar src={undefined} sx={{ width: '128px', height: '128px' }} />
            </Grid>
            <Grid item xs={3} sx={{ borderLeft: '1px solid black' }}>
                <Avatar src={undefined} sx={{ width: '128px', height: '128px' }} />
            </Grid>
        </Grid>
    );
}

export default MatchListSummary;
