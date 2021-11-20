import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';

import Box from '@mui/material/Box';
import { PlayerListing } from './style';

import PlayerData from './PlayerData';

export default function PlayerList() {
    const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard);

    return (
        <PlayerListing>
            {leaderboard.map((player, idx) => (
                <PlayerData 
                    key={`${player.summonerName}#${player.region}`}
                    player={player}
                    idx={idx}
                />
            ))}
        </PlayerListing>
    );
}
