import React from 'react';

import { PieChart, Pie, Label, Cell } from 'recharts';

function CircleChart({ data, display }: { data: { name: string, value: number, color: string }[], display: { style: object, value: string } }) {
    return (
        <PieChart width={256} height={256}>
            <Pie
                data={data}
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
                <Label style={display.style} value={display.value} position="center" />
            </Pie>
        </PieChart>
    );
}

export default CircleChart;
