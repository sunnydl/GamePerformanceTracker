import React from 'react';

import { Grid } from '@mui/material';
import { MatchSummaryCell } from './style';

interface MatchSummaryProps {
    rank: number;
    lane: string;
    gameMode: string;
    date: string;
}

/**
 * Returns a functional component of the match history page that displays
 * the overall summary of a match.
 *
 * @param {number} rank How well the summoner did relative to other summoners in the match.
 * @param {string} lane The position the summoner played in the match.
 * @param {string} gameMode The match's game mode.
 * @param {string} data The date that the match took place.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchSummary({
    rank,
    lane,
    gameMode,
    date,
}: MatchSummaryProps) {
    return (
        <MatchSummaryCell className='summary'>
            <Grid container>
                <Grid xs={1} item>
                    {rank}
                </Grid>
                <Grid xs={3} item>
                    {lane}
                </Grid>
                <Grid xs={4} item>
                    {gameMode}
                </Grid>
                <Grid xs={4} item>
                    {date}
                </Grid>
            </Grid>
        </MatchSummaryCell>
    );
}
