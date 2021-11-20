import React from 'react'

import { Avatar, Grid, ListItem } from '@mui/material'
import { PlayerGrid } from './style';

export default function PlayerData({ player, idx }: { player: any, idx: number }) {
    return (
        <ListItem>
            <PlayerGrid container xs={12}>
                <Grid item xs={1}>
                    {idx + 1}
                </Grid>
                <Grid item xs={2}>
                    <Avatar src={undefined} /> {/* TODO: display summonerIcon */}
                </Grid>
                <Grid item xs={3}>
                    {player.summonerName}
                </Grid>
                <Grid item xs={2}>
                    {(player.winGames / (player.winGames + player.lossGames)) || 0}
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
