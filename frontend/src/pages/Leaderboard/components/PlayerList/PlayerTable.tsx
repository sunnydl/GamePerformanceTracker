import React from 'react';
import Table from '@mui/material/Table';
import { PlayerTableContainer } from './style';

/**
 * Returns a functional component of the leaderboard page that creates a stylized
 * table container for the table.
 *
 * @param {React.ReactNode} children The children components for this table.
 * @returns {JSX.Element} A functional component.
 */
export default function PlayerTable({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PlayerTableContainer>
            <Table aria-label='leaderboard table' size='small'>
                {children}
            </Table>
        </PlayerTableContainer>
    );
}
