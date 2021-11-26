import React from 'react';
import MatchTable from './MatchTable';
import MatchTableElement from './MatchTableElement';

import { useAppSelector } from '../../../../redux/hooks';

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
