import React from 'react';
import { Table, TableBody } from '@mui/material';
import { MatchTableContainer } from './style';

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
