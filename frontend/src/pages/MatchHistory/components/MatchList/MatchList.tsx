import React from 'react';

import { Avatar, Grid, ListItem, ListItemAvatar } from '@mui/material';
import { MatchListing } from './style';

import MatchResults from './MatchResults';
import MatchStatistics from './MatchStatistics';
import MatchSummary from './MatchSummary';

import { useAppSelector } from '../../../../redux/hooks';

const getChampionIconURL = (championName?: string) => {
    if (championName === undefined) return undefined;
    return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`;
}

function MatchList({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches);

    return (
        <MatchListing>
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
