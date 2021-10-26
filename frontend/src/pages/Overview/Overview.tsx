import React from 'react'
import { Container } from '@mui/material';
import UserSummary from './components/UserSummary'
import MatchSummary from './components/MatchSummary'

export default function Overview() {
    return (
        <Container>
            <UserSummary/>
            <MatchSummary/>
        </Container>
    )
}
