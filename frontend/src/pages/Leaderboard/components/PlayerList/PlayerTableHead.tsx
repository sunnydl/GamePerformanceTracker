import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

/**
 * Returns a functional component of the leaderboard page that displays
 * the information that each table column holds.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function PlayerTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                <TableCell>Summoner</TableCell>
                <TableCell>Win Rate</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Tier</TableCell>
                <TableCell>LP</TableCell>
            </TableRow>
        </TableHead>
    );
}
