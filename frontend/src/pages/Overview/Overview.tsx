import React from 'react'
import { Container } from '@mui/material';
import UserSummary from './components/UserSummary'
import MatchSummary from './components/MatchSummary'

export default function Overview() {
    return (
        <Container sx={{
            width: '100%',
            minHeight: '100vh',
            paddingBottom: '4.5rem',
        }}>
            <UserSummary/>
            <MatchSummary/>
        </Container>
    )
}
