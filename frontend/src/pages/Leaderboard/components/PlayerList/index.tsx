import React from 'react';

import PlayerTable from './PlayerTable';
import PlayerTableHead from './PlayerTableHead';
import PlayerTableBody from './PlayerTableBody';

export default function PlayerList() {
    return (
        <PlayerTable>
            <PlayerTableHead />
            <PlayerTableBody />
        </PlayerTable>
    );
}
