import React from 'react';

import PlayerTable from './PlayerTable';
import PlayerTableHead from './PlayerTableHead';
import PlayerTableBody from './PlayerTableBody';

/**
 * Returns a functional component of the leaderboard page that creates a
 * stylized table.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function PlayerList() {
    return (
        <PlayerTable>
            <PlayerTableHead />
            <PlayerTableBody />
        </PlayerTable>
    );
}
