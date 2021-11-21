import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { Avatar, TableBody, TableRow, TableCell } from '@mui/material';

import { getSummonerIconURL, calculateWinRate } from '../../../../util';

export default function PlayerTableBody() {
    const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard);

    return (
        <TableBody>
            {leaderboard.map((player, idx) => (
                <TableRow key={`${player.summonerName}#${player.region}`}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={getSummonerIconURL(player.summonerIcon)} />
                        {player.summonerName}
                    </TableCell>
                    <TableCell>{calculateWinRate(player.winGames, player.lossGames, true)}</TableCell>
                    <TableCell>{player.summonerLevel}</TableCell>
                    <TableCell>{player.rank}</TableCell>
                    <TableCell>{player.leaguePoints}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}
