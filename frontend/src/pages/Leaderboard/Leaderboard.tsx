import React from 'react'

import { styled } from '@mui/material/styles';

import Content from './components/Content';

export default function LeaderBoard() {

    const LeaderboardWrapper = styled('div')(() => ({
        padding: '20px',
        minHeight: '1200px',
        height: 'fit-content',
    }))

    return (
        <LeaderboardWrapper>
            <Content/>
        </LeaderboardWrapper>
    )
}
