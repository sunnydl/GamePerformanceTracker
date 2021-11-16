import React from 'react'
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '../../../../redux/hooks';
import { Paper } from '@mui/material';

export default function DataChart({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches.slice(0, size).reverse());

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <Paper>
                    {/* <b>{`${label}`}</b> */}
                    {/* <p>{`Kills: ${payload[0]?.payload?.kills}`}</p>
                    <p>{`Deaths: ${payload[0]?.payload?.deaths}`}</p>
                    <p>{`Assists: ${payload[0]?.payload?.assists}`}</p> */}
                    <p>{`GPT Score: ${payload[0]?.payload?.gptScore}`}</p>
                </Paper>
            );
        }

        return null;
    };

    return (
        <ResponsiveContainer width='99%' height='99%'>
            <LineChart
                width={512}
                height={512}
                data={matches}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis /> */}
                <YAxis 
                    tickFormatter={(tick) => {
                        return /*buttonStates.WinRates? `${tick}%`:*/`${tick}`;
                    }}
                />
                <Tooltip content={<CustomTooltip/>}/>
                <Legend />
                {/* <Line type="monotone" dataKey="kills" stroke="#77DD77" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="deaths" stroke="#FF6961" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="assists" stroke="#3880FF" activeDot={{ r: 8 }} /> */}
                <Line type="monotone" dataKey="gptScore" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
