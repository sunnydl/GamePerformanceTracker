import React from 'react';

import { Avatar, Grid } from '@mui/material';
import { ChampDataGrid, ChampPerformanceWrapper } from './style';

import { ChampPerformanceSummary } from '../../../../interfaces';
import { getChampionIconURL } from '../../../../util';

function ChampData({ data }: { data: ChampPerformanceSummary }) {
    return (
        <ChampDataGrid container spacing={1}>
            <Grid item xs={12} xl={6}>
                <Avatar src={getChampionIconURL(data.championName)} />
            </Grid>
            <Grid item xs={12} xl={6}>
                <ChampPerformanceWrapper>
                    <div className='win-rate'>
                        <span className='win-ratio'>
                            {((data.wins / data.matches) || 0).toFixed(2)}
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

export default ChampData;
