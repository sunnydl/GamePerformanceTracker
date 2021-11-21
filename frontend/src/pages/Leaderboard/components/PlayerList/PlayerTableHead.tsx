import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

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
