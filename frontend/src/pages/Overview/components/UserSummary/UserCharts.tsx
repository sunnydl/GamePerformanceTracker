import React from 'react';
import { ChartsWrapper } from './style';
import CircleChart from '../../../../components/CircleChart/CircleChart';

import { displayWinRate } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

export default function UserCharts() {
    const { wins, losses, kills, deaths, assists } = useAppSelector((state) => {
        const wins = state.user.winGames ?? 0;
        const losses = state.user.lossGames ?? 0;
        // TODO: retrieve average kda from backend
        return { wins, losses, kills: 26, deaths: 12, assists: 31 };
    });

    return (
        <ChartsWrapper>
            <CircleChart
                title="Win Rate"
                data={[
                    { name: "wins", value: wins, color: "#3880FF" },
                    { name: "losses", value: losses, color: "#DFDFDF" },
                ]}
                labels={[{ style: { fontSize: "1.5rem" }, value: displayWinRate(wins, losses, true) }]}
            />
            <CircleChart
                title="Average KDA"
                data={[
                    { name: "kills", value: kills, color: "#77DD77" },
                    { name: "deaths", value: deaths, color: "#FF6961" },
                    { name: "assists", value: assists, color: "#3880FF" },
                ]}
                labels={[
                    { style: { fontSize: "0.875rem", color: "#77DD77" }, value: `Kills: ${kills.toFixed(2)}` },
                    { style: { fontSize: "0.875rem", color: "#FF6961" }, value: `Deaths: ${deaths.toFixed(2)}` },
                    { style: { fontSize: "0.875rem", color: "#3880FF" }, value: `Assists: ${assists.toFixed(2)}` },
                ]}
            />
        </ChartsWrapper>
    )
}
