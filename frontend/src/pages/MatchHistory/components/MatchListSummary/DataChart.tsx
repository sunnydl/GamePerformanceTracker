import React, { useState } from 'react';
import {
    LineChart,
    Line,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { useAppSelector } from '../../../../redux/hooks';
import { Button, Grid, Paper } from '@mui/material';
import { LeftButtonsWrapper, RightButtonsWrapper } from './style';

import { MatchData } from '../../../../interfaces';
import OptionSelectButton from './OptionSelectButton';

// TODO: figure out if an interface's properties can be extracted,
//       similar to running `Object.keys(obj)`
const matchDataKeys = [
    'kills',
    'deaths',
    'assists',
    'gptScore',
    'visionPerMin',
    'csPerMin',
    'dmgPerMin',
];

// Temporary colors to distinguish each data type
const matchDataColors = {
    kills: 'green',
    deaths: 'pink',
    assists: 'aqua',
    gptScore: 'yellow',
    visionPerMin: 'gray',
    csPerMin: 'lime',
    dmgPerMin: 'red',
};

export default function DataChart({ size }: { size: number }) {
    const matches = useAppSelector((state) =>
        state.matches.slice(0, size).reverse()
    );
    const [type, setType] = useState<string>('');
    const [visibleData, setVisibleData] = useState<string[]>(['gptScore']);

    const champions = matches
        .map(({ championName }) => championName)
        .filter((champ, idx, arr) => arr.indexOf(champ) === idx)
        .reverse();

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <Paper>
                    {/* <b>{`${label}`}</b> */}
                    {visibleData.map((key) => (
                        <p key={key}>
                            {key}: {payload[0]?.payload?.[key]}
                        </p>
                    ))}
                </Paper>
            );
        }

        return null;
    };

    const handleDataChange = (value: string) => {
        setVisibleData((prevState) =>
            prevState.includes(value)
                ? prevState.filter((elem) => elem !== value)
                : [...prevState, value]
        );
    };

    return (
        <Grid container spacing={1} sx={{ height: '100%' }}>
            <Grid item xs={12}>
                <LeftButtonsWrapper>
                    <Button
                        variant={type.length === 0 ? 'contained' : 'outlined'}
                        onClick={() => setType('')}
                    >
                        Overall
                    </Button>
                    <Button
                        variant={type.length > 0 ? 'contained' : 'outlined'}
                        onClick={() => setType(champions[0])}
                    >
                        By Champion
                    </Button>
                </LeftButtonsWrapper>
                <RightButtonsWrapper>
                    {type.length > 0 && (
                        <OptionSelectButton
                            label={type}
                            options={champions}
                            selectedOptions={type}
                            onOptionsChange={setType}
                        />
                    )}
                    <OptionSelectButton
                        label='Filters'
                        options={matchDataKeys}
                        selectedOptions={visibleData}
                        onOptionsChange={handleDataChange}
                        multiple
                    />
                </RightButtonsWrapper>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveContainer width='99%' height='99%'>
                    <LineChart
                        width={512}
                        height={512}
                        data={
                            (type.length === 0
                                ? matches
                                : matches.filter((match) => match.championName === type)
                            ) as MatchData[]
                        }
                        margin={{
                            top: 16,
                            right: 16,
                            left: 16,
                            bottom: 16,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        {/* <XAxis /> */}
                        <YAxis
                            tickFormatter={(tick) => {
                                return /*buttonStates.WinRates? `${tick}%`:*/ `${tick}`;
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        {visibleData.map((key) => (
                            <Line
                                key={key}
                                type='monotone'
                                dataKey={key}
                                stroke={matchDataColors[key as keyof typeof matchDataColors]}
                                activeDot={{ r: 8 }}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    );
}
