import React from 'react';

import { PieChart, Pie, Label, Cell,  } from 'recharts';

const createEmptyChart = (data: { name: string, value: number, color: string }[]) => {
    data.push({ name: "none", value: 1, color: "#DFDFDF" });
    return data;
}

function CircleChart({ title, data, label }: { title: string, data: { name: string, value: number, color: string }[], label: { style: object, value: string } }) {
    const total = data.reduce((sum, elem) => sum + elem.value, 0);

    return (
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
                <Label
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        transform: "translate(0, -70%)"
                    }}
                    value={title}
                />
                {data.map((val, idx) => (
                    <Cell key={idx} fill={val.color} />
                ))}
                <Label
                    style={label.style}
                    value={label.value}
                    position="center"
                />
            </Pie>
        </PieChart>
    );
}

export default CircleChart;
