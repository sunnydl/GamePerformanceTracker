import React from 'react';

import { Grid } from '@mui/material';
import { MatchChampsGrid } from './style';

import OverallData from './OverallData';
import ChampData from './ChampData';

import { MatchState, ChampPerformanceSummary } from '../../../../interfaces';
import { calculateWinRate } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

export function getTopChamps(matches: MatchState[]) {
    const champs: { [key: string]: ChampPerformanceSummary } = {};

    for (const key in matches) {
        const match = matches[key];
        const champ = champs[match.championName];

        if (champ) {
            champ.matches++;
            champ.wins += match.win ? 1 : 0;
            champ.kills += match.kills;
            champ.deaths += match.deaths;
            champ.assists += match.assists;
        }
        else {
            champs[match.championName] = {
                championName: match.championName,
                matches: 1,
                wins: match.win ? 1 : 0,
                kills: match.kills,
                deaths: match.deaths,
                assists: match.assists
            }
        }
    }

    const topChamps = Object.values(champs).sort((a, b) => (
        b.matches - a.matches
    ));
    return topChamps.slice(0, 3);
}

/**
 * Returns a functional component of the match history page that displays
 * a list of data on the summoner's most recently played champions.
 * 
 * @param {number} size The number of matches being displayed.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchChamps({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches.slice(0, size));
    const champs = getTopChamps(matches);

    const wins = matches.filter((match) => match.win).length;
    const losses = matches.length - wins;
    const ratio = calculateWinRate(wins, losses);

    return (
        <MatchChampsGrid container>
            <Grid item xs={12} className='outlined'>
                <OverallData
                    wins={wins}
                    losses={losses}
                    ratio={ratio.value}
                />
            </Grid>
            <Grid item container xs={12}>
                {champs.map((champ) => (
                    <Grid key={champ.championName} item xs={12} className='outlined'>
                        <ChampData data={champ} />
                    </Grid>
                ))}
            </Grid>
        </MatchChampsGrid>
    );
}
