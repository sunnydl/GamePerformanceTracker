import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

import Selectors from './Selectors';

import {
    Header,
} from './style'

export default function TopSection() {

    const leaderboardState = useAppSelector((state) => state.leaderboard);
    const tier = leaderboardState.tier;
    const division = leaderboardState.division;
    const queueType = leaderboardState.queueType;

    return (
        <React.Fragment>
            <Header align="left">
                Top {queueType} Players in {['Challenger', 'GrandMaster', 'Master'].includes(tier)? tier:`${tier} ${division}`}
            </Header>
            <Selectors/>
        </React.Fragment>
    )
}
