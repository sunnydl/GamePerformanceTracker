import React from 'react';
import { Avatar, Box, TableCell } from '@mui/material';
import { MatchTableRow } from './style';
import MatchResults from './MatchResults';
import MatchSummary from './MatchSummary';
import MatchStatistics from './MatchStatistics';
import { MatchState } from '../../../../interfaces';
import { getChampionIconURL } from '../../../../util';

export default function MatchTableElement({ match }: { match: MatchState }) {
    return (
        <MatchTableRow>
            <MatchSummary
                rank={0}
                lane={match.role}
                gameMode={match.gameMode ?? 'Placeholder'}
                date={match.gameDate}
            />
            <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={getChampionIconURL(match.championName)} />
                    <MatchResults
                        win={match.win}
                        kills={match.kills}
                        deaths={match.deaths}
                        assists={match.assists}
                        gptScore={match.gptScore}
                    />
                </Box>
            </TableCell>
            <TableCell>
                <MatchStatistics
                    title='Vis/Min'
                    amount={match.visionAmt}
                    rate={match.visionPerMin}
                />
            </TableCell>
            <TableCell>
                <MatchStatistics
                    title='Cs/Min'
                    amount={match.csAmt}
                    rate={match.csPerMin}
                />
            </TableCell>
            <TableCell>
                <MatchStatistics
                    title='Dmg/Min'
                    amount={match.dmgAmt}
                    rate={match.dmgPerMin}
                />
            </TableCell>
        </MatchTableRow>
    );
}
