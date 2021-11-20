import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

import Selectors from './Selectors';

import {
    Header,
    TopSectionWrapper
} from './style'

export default function TopSection() {

    const { tier, division, queueType } = useAppSelector((state) => state.leaderboard);

    return (
        <TopSectionWrapper>
            <Header align="left">
                Top {queueType} Players in {['Challenger', 'GrandMaster', 'Master'].includes(tier)? tier:`${tier} ${division}`}
            </Header>
            <Selectors/>
        </TopSectionWrapper>
    )
}
