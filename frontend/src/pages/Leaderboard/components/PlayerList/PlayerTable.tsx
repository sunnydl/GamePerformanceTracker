import React from 'react';
import Table from '@mui/material/Table';
import { PlayerTableContainer } from './style';

export default function PlayerTable(props: any) {
    return (
        <PlayerTableContainer>
            <Table aria-label='leaderboard table' size='small'>
                {props.children}
            </Table>
        </PlayerTableContainer>
    );
}
