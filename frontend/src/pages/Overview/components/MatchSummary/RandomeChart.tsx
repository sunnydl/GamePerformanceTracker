import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartState } from '../../../../interfaces';
import { useAppSelector } from '../../../../redux/hooks';

export default function RandomeChart({buttonStates}: {buttonStates: any}) {
  const data: Array<ChartState> = useAppSelector((state) => state.chart);

  return (
      <ResponsiveContainer width="90%" height="80%">
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {buttonStates.WinRates && <Line type="natural" dataKey="winLoss" stroke="#8884d8" activeDot={{ r: 8 }} />}
          {buttonStates.Kills && <Line type="monotone" dataKey="kills" stroke="#77DD77" activeDot={{ r: 8 }} />}
          {buttonStates.Deaths && <Line type="monotone" dataKey="deaths" stroke="#FF6961" activeDot={{ r: 8 }} />}
          {buttonStates.Assists && <Line type="monotone" dataKey="assists" stroke="#3880FF" activeDot={{ r: 8 }} />}
          {buttonStates.Scores && <Line type="monotone" dataKey="scores" stroke="#82ca9d" activeDot={{ r: 8 }} />}
          </LineChart>
      </ResponsiveContainer>
  )
}
