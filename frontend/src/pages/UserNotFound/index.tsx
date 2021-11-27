import React from 'react'
import TopSection from './components/topSection'
import SummonerNotFound from './components/SummonerNotFound'
import ExtraLink from './components/ExtraLink'

/**
 * Returns a functional component of the UserNotFound page that 
 * displays the three leaderboard content components.
 * 
 * @returns {JSX.Element} The functional component.
 */

export default function UserNotFound() {
    return (
        <main data-testid="UserNotFound" >
        <React.Fragment>
            <TopSection/>
            <SummonerNotFound/>
            <ExtraLink/>
        </React.Fragment>
        </main>
    )
}
