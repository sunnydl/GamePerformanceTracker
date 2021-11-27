import React from 'react';

import { Avatar, Grid } from '@mui/material';
import { ChampDataGrid, ChampPerformanceWrapper } from './style';

import { displayWinRate } from '../../../../util';
import { ChampPerformanceSummary } from '../../../../interfaces';
import { getChampionIconURL } from '../../../../util';

/**
 * Returns a functional component of the match history page that displays
 * a summoner's recent performance on a specific champion.
 * 
 * @param {ChampPerformanceSummary} data An object containing the summoner's recent performance data on the champion.
 * @returns {JSX.Element} A functional component.
 */
export default function ChampData({ data }: { data: ChampPerformanceSummary }) {
    return (
        <ChampDataGrid container spacing={1}>
            <Grid item xs={12} xl={6}>
                <Avatar src={getChampionIconURL(data.championName)} />
            </Grid>
            <Grid item xs={12} xl={6}>
                <ChampPerformanceWrapper>
                    <div className='win-rate'>
                        <span className='win-ratio'>
                            {displayWinRate(data.wins, data.matches - data.wins)}
                        </span>
                        &nbsp;
                        <span className='win-loss'>
                            {data.wins}W - {data.matches - data.wins}L
                        </span>
                    </div>
                    <div className='kda'>
                        <span className='kills'>
                            {(data.kills / data.matches).toFixed(2)}
                        </span>
                        &nbsp;/&nbsp;
                        <span className='deaths'>
                            {(data.deaths / data.matches).toFixed(2)}
                        </span>
                        &nbsp;/&nbsp;
                        <span className='assists'>
                            {(data.assists / data.matches).toFixed(2)}
                        </span>
                    </div>
                </ChampPerformanceWrapper>
            </Grid>
        </ChampDataGrid>
    );
}
