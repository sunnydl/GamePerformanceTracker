import React from 'react'
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import UserSummary from './components/UserSummary'
import MatchSummary from './components/MatchSummary'

/**
 * Returns a functional component of the overview page that displays
 * the two summoner data components.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function Overview() {
    const summonerFound = useAppSelector((state) => state.user.summonerFound);
    if (!summonerFound)
    {
        return <Redirect to='/search' />
    }

    return (
        <div data-testid='overview'>
            <UserSummary />
            <MatchSummary />
        </div>
    )
}
