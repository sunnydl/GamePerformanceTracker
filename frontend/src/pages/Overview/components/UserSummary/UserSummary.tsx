import React from 'react';
import { Grid, Grow } from '@mui/material';
import UserProfile from './UserProfile';
import UserCharts from './UserCharts';
import UserChamps from './UserChamps';

/**
 * Returns a functional component of the overview page that displays a
 * summary of the summoner's overall statistics.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function UserSummary() {
    return (
        <Grow in>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <UserProfile />
                </Grid>
                <Grid container item spacing={2} xs={12} lg={6}>
                    <Grid item xs={12}>
                        <UserCharts />
                    </Grid>
                    <Grid item xs={12}>
                        <UserChamps />
                    </Grid>
                </Grid>
            </Grid>
        </Grow>
    );
}
