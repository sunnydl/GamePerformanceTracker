import React from 'react';

import { Avatar, Grid, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { MatchListing } from './style';

import MatchListSummary from './MatchListSummary';
import MatchResults from './MatchResults';
import MatchStatistics from './MatchStatistics';
import MatchSummary from './MatchSummary';

import { useAppSelector } from '../../../../redux/hooks';

function MatchList({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.chart);

    return (
        <React.Fragment>
            <Typography variant='h3' sx={{ mb: 4, textAlign: 'left' }}>Recent Matches</Typography>
            <MatchListSummary matches={matches} />
            <MatchListing>
                {matches.slice(0, size).map((match, idx) => (
                    <ListItem key={idx} sx={{ border: '1px solid black' }}>
                        <MatchSummary
                            rank={1}
                            lane='XXXXXX' // {match.role}
                            gameMode='XXXXXX' // {match.gameMode}
                            date='XX/XX/XXXX' // {match.gameDate}
                        />
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <ListItemAvatar>
                                    <Avatar src={undefined/* match.championName */} />
                                </ListItemAvatar>
                            </Grid>
                            <Grid item xs={2}>
                                <MatchResults
                                    win={true} // {match.win}
                                    kills={match.kills}
                                    deaths={match.deaths}
                                    assists={match.assists}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <MatchStatistics
                                    visionAmount={0} // {match.visionAmt}
                                    visionRate={0} // {match.visionPerMin}
                                    csAmount={0} // {match.csAmt}
                                    csRate={0} // {match.csPerMin}
                                    dmgAmount={0} // {match.dmgAmt}
                                    dmgRate={0} // {match.dmgPerMin}
                                />
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </MatchListing>
        </React.Fragment>
    );
}

export default MatchList;
