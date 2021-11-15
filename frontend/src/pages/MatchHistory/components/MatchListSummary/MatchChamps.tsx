import React from 'react';

import { Grid } from '@mui/material';
import { MatchChampsGrid } from './style';

import OverallData from './OverallData';
import ChampData from './ChampData';

import { MatchState } from '../../../../interfaces';
import { useAppSelector } from '../../../../redux/hooks';

export interface ChampPerformanceSummary {
    championName: string,
    matches: number,
    wins: number,
    kills: number,
    deaths: number,
    assists: number
}

function getTopChamps(matches: MatchState[]) {
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

function getWinLossValues(matches: MatchState[]) {
    const wins = matches.filter((match) => match.win).length;
    const losses = matches.length - wins;
    const ratio = (wins / matches.length) || 0;

    return { wins, losses, ratio };
}

function MatchChamps({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches.slice(0, size));
    const champs = getTopChamps(matches);

    return (
        <MatchChampsGrid container>
            <Grid item xs={12} className='outlined'>
                <OverallData {...getWinLossValues(matches)} />
            </Grid>
            <Grid item container xs={12}>
                {champs.map((champ) => (
                    <Grid item xs={12} className='outlined'>
                        <ChampData key={champ.championName} data={champ} />
                    </Grid>
                ))}
            </Grid>
        </MatchChampsGrid>
    );
}

export default MatchChamps;
