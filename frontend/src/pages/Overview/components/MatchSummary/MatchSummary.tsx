import React from 'react'
import { useAppSelector } from '../../../../redux/hooks';

// styles components
import {
    MatchSummaryWrapper,
    MatchSummaryPaper,
    Header,
    Paragraph,
    GraphWrapper,
    ButtonSelections,
    Buttons
} from './style'

// enums
import {
    NumOfGames,
    Features
} from './enums'

import RandomeChart from './RandomeChart';

export default function MatchSummary() {

    const {
        summonerName,
    } = useAppSelector((state) => state.user);

    return (
        <MatchSummaryWrapper>
            <MatchSummaryPaper>
                <Header align="center">
                    {summonerName? summonerName:"Player"}'s Statistics
                </Header>
                <Paragraph 
                    variant="subtitle1"
                    align="center"
                >
                    Choose a Time Frame
                </Paragraph>
                <ButtonSelections>
                    {NumOfGames.map((num: number) => (
                        <Buttons variant="contained" key={num}>{num} Games</Buttons>
                    ))}
                </ButtonSelections>
                <GraphWrapper>
                    <RandomeChart/>
                    <ButtonSelections>
                        {Features.map((feature: string) => (
                            <Buttons variant="contained" key={feature}>{feature}</Buttons>
                        ))}
                    </ButtonSelections>
                </GraphWrapper>
            </MatchSummaryPaper>
        </MatchSummaryWrapper>
    )
}
