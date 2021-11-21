import React from 'react'

import { Avatar, Grid, ListItem } from '@mui/material'
import { PlayerGrid } from './style';

import { getSummonerIconURL, calculateWinRate } from '../../../../util';

export default function PlayerData({ player, idx }: { player: any, idx: number }) {
    return (
        <ListItem>
            <PlayerGrid container>
                <Grid item xs={1}>
                    {idx + 1}
                </Grid>
                <Grid item xs={1}>
                    <Avatar src={getSummonerIconURL(player.summonerIcon)} />
                </Grid>
                <Grid item xs={3}>
                    {player.summonerName}
                </Grid>
                <Grid item xs={3}>
                    {calculateWinRate(player.winGames, player.lossGames, true)}
                </Grid>
                <Grid item container xs={4}>
                    <Grid item xs={4}>
                        Level {player.summonerLevel}
                    </Grid>
                    <Grid item xs={5}>
                       {player.rank}
                    </Grid>
                    <Grid item xs={3}>
                        {player.leaguePoints} LP
                    </Grid>
                </Grid>
            </PlayerGrid>
        </ListItem>
    )
}
