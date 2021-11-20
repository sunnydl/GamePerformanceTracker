import React from 'react'

import { Box } from '@mui/material'

export default function PlayerData({ player }: { player: any }) {
    return (
        <Box sx={{
            bgcolor: 'background.paper',
            borderColor: 'text.primary',
            m: 1,
            border: 1,
        }}>
            <div>{player.summonerIcon}</div>
            <div>{player.summonerName}</div>
            <div>{player.winGames}</div>
            <div>{player.summonerLevel}</div>
            <div>{player.rank}</div>
            <div>{player.summonerIcon}</div>
            <div>{player.leaguePoints}</div>
        </Box>
    )
}
