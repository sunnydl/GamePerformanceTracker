import React from 'react';

import { Avatar, Grid, GridSize } from '@mui/material';

import { ChartState } from '../../../../interfaces';

interface ChampPerformanceSummary {
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

function MatchListSummary({ matches }: { matches: ChartState[] }) {
    const champs = getTopChamps(matches);
    const { wins, losses, ratio } = getWinLossValues(matches);

    return (
        <Grid container spacing={2}>
            <Grid item xs={2} sx={{ pr: 2, pb: 2, borderTop: '1px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{wins}W - {losses}L</div>
                <div style={{ fontSize: '2rem' }}>({ratio.toFixed(2)} W/L)</div>
            </Grid>
            <Grid item container spacing={2} xs={10}>
                {champs.map((champ) => (
                    <Grid key={champ.name} item container xs={(Math.floor(12 / champs.length)) as GridSize} sx={{ borderLeft: '1px solid black', borderTop: '1px solid black', alignItems: 'center', justifyContent: 'center' }}>
                            <Avatar src={undefined} sx={{ width: '128px', height: '128px' }} />
                            <div style={{ width: '60%' }}>
                                <div style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}>{((champ.wins / champ.matches) || 0).toFixed(2)}</span>
                                    &nbsp;
                                    <span>{champ.wins}W - {champ.matches - champ.wins}L</span>
                                </div>
                                <div style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                                    <span style={{ color: 'green' }}>{(champ.kills / champ.matches).toFixed(2)}</span>
                                    &nbsp;/&nbsp;
                                    <span style={{ color: 'red' }}>{(champ.deaths / champ.matches).toFixed(2)}</span>
                                    &nbsp;/&nbsp;
                                    <span style={{ color: 'aqua' }}>{(champ.assists / champ.matches).toFixed(2)}</span>
                                </div>
                            </div>
                            
                    </Grid>
                ))}
            </Grid>
            
        </Grid>
    );
}

export default MatchListSummary;
