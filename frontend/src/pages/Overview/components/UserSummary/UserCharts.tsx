import React from 'react';
import { useTheme } from '@mui/material';
import { ChartsWrapper } from './style';
import CircleChart from '../../../../components/CircleChart';

import { displayWinRate } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

import { computeAvgKDA } from '../../../../util';

/**
 * Returns a functional component of the overview page that displays
 * two charts of the summoner's win rate and kills/deaths/assists values.
 *
 * @returns {JSX.Element} A functional component.
 */
export default function UserCharts() {
    const theme = useTheme();
    const { wins, losses, kills, deaths, assists } = useAppSelector((state) => {
        const wins = state.user.winGames ?? 0;
        const losses = state.user.lossGames ?? 0;
        const { kills, deaths, assists } = computeAvgKDA(state.chart);
        return { wins, losses, kills, deaths, assists };
    });

    return (
        <ChartsWrapper data-testid='circle-charts'>
            <CircleChart
                title='Win Rate'
                data={[
                    {
                        name: 'wins',
                        value: wins,
                        color: theme.palette.info.main,
                    },
                    {
                        name: 'losses',
                        value: losses,
                        color: theme.palette.grey[600],
                    },
                ]}
                labels={[
                    {
                        style: { fontSize: theme.typography.h5.fontSize },
                        value: displayWinRate(wins, losses, true),
                    },
                ]}
            />
            <CircleChart
                title='Average KDA'
                data={[
                    {
                        name: 'kills',
                        value: kills,
                        color: theme.palette.success.light,
                    },
                    {
                        name: 'deaths',
                        value: deaths,
                        color: theme.palette.error.light,
                    },
                    {
                        name: 'assists',
                        value: assists,
                        color: theme.palette.info.light,
                    },
                ]}
                labels={[
                    {
                        style: {
                            fontSize: theme.typography.body2.fontSize,
                            color: theme.palette.success.main,
                        },
                        value: `Kills: ${kills.toFixed(2)}`,
                    },
                    {
                        style: {
                            fontSize: theme.typography.body2.fontSize,
                            color: theme.palette.error.main,
                        },
                        value: `Deaths: ${deaths.toFixed(2)}`,
                    },
                    {
                        style: {
                            fontSize: theme.typography.body2.fontSize,
                            color: theme.palette.info.main,
                        },
                        value: `Assists: ${assists.toFixed(2)}`,
                    },
                ]}
            />
        </ChartsWrapper>
    );
}
