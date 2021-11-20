import React from 'react';

import { Avatar, Grid, ListItem, ListItemAvatar } from '@mui/material';
import { MatchListing } from './style';

import MatchResults from './MatchResults';
import MatchStatistics from './MatchStatistics';
import MatchSummary from './MatchSummary';

import { useAppSelector } from '../../../../redux/hooks';
import { getChampionIconURL } from '../../../../util';

function MatchList({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches);

    return (
        <MatchListing data-testid='match-list'>
            {matches.slice(0, size).map((match, idx) => (
                <ListItem key={idx}>
                    <MatchSummary
                        rank={1}
                        lane={match.role}
                        gameMode={match.gameMode || 'Placeholder'}
                        date={match.gameDate}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <ListItemAvatar>
                                <Avatar src={getChampionIconURL(match.championName)} />
                            </ListItemAvatar>
                        </Grid>
                        <Grid item xs={2}>
                            <MatchResults
                                win={match.win}
                                kills={match.kills}
                                deaths={match.deaths}
                                assists={match.assists}
                                gptScore={match.gptScore}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <MatchStatistics
                                visionAmount={match.visionAmt}
                                visionRate={match.visionPerMin}
                                csAmount={match.csAmt}
                                csRate={match.csPerMin}
                                dmgAmount={match.dmgAmt}
                                dmgRate={match.dmgPerMin}
                            />
                        </Grid>
                    </Grid>
                </ListItem>
            ))}
        </MatchListing>
    );
}

export default MatchList;
