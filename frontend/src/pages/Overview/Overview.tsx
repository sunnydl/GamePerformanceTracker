import React from 'react'
import UserSummary from './components/UserSummary/UserSummary'
import MatchSummary from './components/MatchSummary/MatchSummary'

export default function Overview() {
    return (
        <React.Fragment>
            <UserSummary/>
            <MatchSummary/>
        </React.Fragment>
    )
}
