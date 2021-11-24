import React from 'react'
import TopSection from './components/topSection'
import SummonerNotFound from './components/SummonerNotFound'
import ExtraLink from './components/ExtraLink'

export default function UserNotFound() {
    return (
        <React.Fragment>
            <TopSection/>
            <SummonerNotFound/>
            <ExtraLink/>
        </React.Fragment>
    )
}
