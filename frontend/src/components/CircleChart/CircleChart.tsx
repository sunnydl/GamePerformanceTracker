import React from 'react';

import { PieChart, Pie, Cell } from 'recharts';

import {
    CircleChartWrapper,
    TitleWrapper,
    LabelWrapper
  } from './style';

const createEmptyChart = (data: { name: string, value: number, color: string }[]) => {
    data.push({ name: "none", value: 1, color: "#DFDFDF" });
    return data;
}

function CircleChart({ title, data, labels }: { title: string, data: { name: string, value: number, color: string }[], labels: { style: object, value: string | number }[] }) {
    const total = data.reduce((sum, elem) => sum + elem.value, 0);

    return (
        <CircleChartWrapper>
            <TitleWrapper>
                {title}
            </TitleWrapper>
            <PieChart width={256} height={256}>
                <Pie
                    data={total ? data : createEmptyChart(data)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
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
                    <div key={idx} style={label.style}>{label.value}</div>
                ))}
            </LabelWrapper>
        </CircleChartWrapper>
    );
}

export default CircleChart;
