import React from 'react';

import { OverallDataWrapper } from './style';

interface OverallDataProps {
    wins: number,
    losses: number,
    ratio: number
}

function OverallData({ wins, losses, ratio }: OverallDataProps) {
    return (
        <OverallDataWrapper>
            <div>{wins}W - {losses}L</div>
            <div>({ratio.toFixed(2)} W/L)</div>
        </OverallDataWrapper>
    );
}

export default OverallData;
