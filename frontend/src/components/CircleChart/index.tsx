import React from 'react';
import { useTheme } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

import { CircleChartWrapper, TitleWrapper, LabelWrapper } from './style';

const createEmptyChart = (
    data: { name: string; value: number; color: string }[],
    color: string
) => {
    data.push({ name: 'none', value: 1, color });
    return data;
};

export default function CircleChart({
    title,
    data,
    labels,
}: {
    title: string;
    data: { name: string; value: number; color: string }[];
    labels: { style: object; value: string | number }[];
}) {
    const theme = useTheme();
    const total = data.reduce((sum, elem) => sum + elem.value, 0);

    return (
        <CircleChartWrapper>
            <TitleWrapper>{title}</TitleWrapper>
            <PieChart width={256} height={256}>
                <Pie
                    data={
                        total
                            ? data
                            : createEmptyChart(data, theme.palette.grey[300])
                    }
                    dataKey='value'
                    nameKey='name'
                    cx='50%'
                    cy='50%'
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={60}
                    outerRadius={80}
                >
                    {data.map((val, idx) => (
                        <Cell key={idx} fill={val.color} />
                    ))}
                </Pie>
            </PieChart>
            <LabelWrapper>
                {labels.map((label, idx) => (
                    <div key={idx} style={label.style}>
                        {label.value}
                    </div>
                ))}
            </LabelWrapper>
        </CircleChartWrapper>
    );
}
