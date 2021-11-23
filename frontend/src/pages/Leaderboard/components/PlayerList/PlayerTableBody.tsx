import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { useTheme, Avatar, Box, TableBody, TableRow, TableCell } from '@mui/material';
import { PlayerLink } from './style';
import RatioBar from '../../../../components/RatioBar';

import { getSummonerIconURL, displayWinRate } from '../../../../util';

/**
 * Returns a functional component of the leaderboard page that displays the
 * leaderboard information.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function PlayerTableBody() {
    const theme = useTheme();
    const leaderboard = useAppSelector((state) => state.leaderboard.leaderboard);

    return (
        <TableBody>
            {leaderboard.map((player, idx) => (
                <TableRow key={`${player.summonerName}#${player.region}`}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src={getSummonerIconURL(player.summonerIcon)} />
                            <PlayerLink to={`/overview?summonerName=${player.summonerName}&region=${player.region}`}>
                                {player.summonerName}
                            </PlayerLink>
                        </Box>
                    </TableCell>
                    <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <RatioBar
                                title={displayWinRate(player.winGames, player.lossGames, true)}
                                firstValue={player.winGames} 
                                secondValue={player.lossGames}
                                firstColor={theme.palette.info.light}
                                secondColor={theme.palette.error.light}
                            />
                        </Box>
                    </TableCell>
                    <TableCell>{player.summonerLevel}</TableCell>
                    <TableCell>{player.rank}</TableCell>
                    <TableCell>{player.leaguePoints}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}
