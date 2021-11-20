import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';

import Box from '@mui/material/Box';

import PlayerData from './PlayerData';

export default function PlayerList() {
    const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard);

    return (
        <Box sx= {{ p: 4 }}>
            {leaderboard.map((player) => (
                <PlayerData 
                    key={`${player.summonerName}#${player.region}`}
                    player={player}
                />
            ))}
        </Box>
    );
}
