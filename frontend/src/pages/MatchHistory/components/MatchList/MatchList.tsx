import React from 'react';

import { Avatar, Grid, ListItem, ListItemAvatar, Typography } from '@mui/material';

import { MatchListing } from './style';

import MatchListSummary from './MatchListSummary';
import MatchResults from './MatchResults';
import MatchStatistics from './MatchStatistics';
import MatchSummary from './MatchSummary';

function MatchList({ size }: { size: number }) {
    const matches: any[] = [...Array(size)].map(_ => ({ position: 6, lane: 'mid', gamemode: 'ranked flex', date: '10/30/2021' })); // TODO: get match data from endpoint

    return (
        <React.Fragment>
            <Typography variant='h3' sx={{ mb: 4, textAlign: 'left' }}>Recent Matches</Typography>
            <MatchListSummary />
            <MatchListing>
                {[...Array(size)].map((_, idx) => (
                    <ListItem key={idx} sx={{ border: '1px solid black' }}>
                        <MatchSummary
                            position={matches[idx].position}
                            lane={matches[idx].lane}
                            gamemode={matches[idx].gamemode}
                            date={matches[idx].date}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <ListItemAvatar>
                                    <Avatar src={undefined/* Player's champion during that match */} />
                                </ListItemAvatar>
                            </Grid>
                            <Grid item xs={2}>
                                <MatchResults />
                            </Grid>
                            <Grid item xs={8}>
                                <MatchStatistics />
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </MatchListing>
        </React.Fragment>
    );
}

export default MatchList;
