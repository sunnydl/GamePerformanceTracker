import React from 'react';
import { Table, TableBody } from '@mui/material';
import { MatchTableContainer } from './style';

/**
 * Returns a functional component of the match history page that creates a
 * stylized table container.
 * 
 * @param {React.ReactNode} children The children elements for this component.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchTable({ children }: { children: React.ReactNode }) {
    return (
        <MatchTableContainer data-testid='match-list'>
            <Table aria-label='leaderboard table' size='small'>
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </MatchTableContainer>
    );
}
