import React from 'react';

import { Grid } from '@mui/material';
import { MatchChampsGrid } from './style';

import OverallData from './OverallData';
import ChampData from './ChampData';

import { ChartState } from '../../../../interfaces';
import { useAppSelector } from '../../../../redux/hooks';

export interface ChampPerformanceSummary {
    name: string,
    matches: number,
    wins: number,
    kills: number,
    deaths: number,
    assists: number
}

function getTopChamps(matches: ChartState[]) {
    const champs: { [key: string]: ChampPerformanceSummary } = {};

    for (const key in matches) {
        const match = matches[key];
        const champ = champs[match.name];

        if (champ) {
            champ.matches++;
            champ.wins += true/*match.win*/ ? 1 : 0;
            champ.kills += match.kills;
            champ.deaths += match.deaths;
            champ.assists += match.assists;
        }
        else {
            champs[match.name] = {
                name: match.name,
                matches: 1,
                wins: true/*match.win*/ ? 1 : 0,
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

function getWinLossValues(matches: ChartState[]) {
    const wins = matches.filter((match) => true/*match.win*/).length;
    const losses = matches.length - wins;
    const ratio = (wins / matches.length) || 0;

    return { wins, losses, ratio };
}

function MatchChamps() {
    const matches = useAppSelector((state) => state.chart);
    const champs = getTopChamps(matches);

    return (
        <MatchChampsGrid container>
            <Grid item xs={12} className='outlined'>
                <OverallData {...getWinLossValues(matches)} />
            </Grid>
            <Grid item container xs={12}>
                {champs.map((champ) => (
                    <Grid item xs={12} className='outlined'>
                        <ChampData key={champ.name} data={champ} />
                    </Grid>
                ))}
            </Grid>
        </MatchChampsGrid>
    );
}

export default MatchChamps;
