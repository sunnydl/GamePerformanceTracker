import React from 'react';

import { OverallDataWrapper } from './style';

interface OverallDataProps {
    wins: number;
    losses: number;
    ratio: number;
}

/**
 * Returns a functional component of the match history page that displays
 * the overall win/loss data for the selected matches.
 *
 * @param {number} wins The total number of wins.
 * @param {number} losses The total number of losses.
 * @param {number} ratio The win ratio value.
 * @returns {JSX.Element} A functional component.
 */
export default function OverallData({ wins, losses, ratio }: OverallDataProps) {
    return (
        <OverallDataWrapper>
            <div>
                {wins}W - {losses}L
            </div>
            <div>({ratio.toFixed(2)} W/L)</div>
        </OverallDataWrapper>
    );
}
