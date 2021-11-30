import React from 'react';
import MatchTable from './MatchTable';
import MatchTableElement from './MatchTableElement';

import { useAppSelector } from '../../../../redux/hooks';

/**
 * Returns a functional component of the match history page that displays
 * a summoner's recent matches.
 *
 * @param {number} size The number of matches being displayed.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchList({ size }: { size: number }) {
    const matches = useAppSelector((state) => state.matches);

    return (
        <MatchTable>
            {matches.slice(0, size).map((match, idx) => (
                <MatchTableElement key={idx} match={match} />
            ))}
        </MatchTable>
    );
}
