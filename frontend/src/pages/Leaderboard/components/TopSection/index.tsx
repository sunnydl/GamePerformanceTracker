import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

import Selectors from './Selectors';

import {
    Header,
    TopSectionWrapper
} from './style'

/**
 * Returns a functional component of the leaderboard page that wraps the page's
 * header text inside a stylized container.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function TopSection() {

    const { tier, division, queueType } = useAppSelector((state) => state.leaderboard);

    return (
        <TopSectionWrapper>
            <Header align="left" data-testid="leaderboard heading">
                Top {queueType} Players in {['Challenger', 'GrandMaster', 'Master'].includes(tier)? tier:`${tier} ${division}`}
            </Header>
            <Selectors/>
        </TopSectionWrapper>
    )
}
