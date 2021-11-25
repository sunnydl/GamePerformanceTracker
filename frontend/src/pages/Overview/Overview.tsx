import React from 'react'
import UserSummary from './components/UserSummary/UserSummary'
import MatchSummary from './components/MatchSummary'

/**
 * Returns a functional component of the overview page that displays
 * the two summoner data components.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function Overview() {
    return (
        <div data-testid='overview'>
            <UserSummary />
            <MatchSummary />
        </div>
    )
}
