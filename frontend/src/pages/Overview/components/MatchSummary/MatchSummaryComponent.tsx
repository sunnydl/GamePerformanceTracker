import React, { useState } from 'react'
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

export default function MatchSummaryComponent() {

    const {
        summonerName,
    } = useAppSelector((state) => state.user);

    const [buttonStates, setButtonStates] = useState({
        "Kills": false,
        "Deaths": false,
        "Assists": false,
        "WinRates": true,
        "GPT Score": false,
    })
    const [buttonsColor, setButtonsColor] = useState<any>({
        'Kills': '#18A0FB',
        "Deaths": '#18A0FB',
        "Assists": '#18A0FB',
        "WinRates": '#db5f12',
        "GPT Score": '#18A0FB',
    })

    const onSelect = (feature: string) => {
        const bStates: any = buttonStates;
        const bColors: any = buttonsColor;
        const bState = bStates[`${feature}`];
        bStates[`${feature}`] = !bState;
        bColors[`${feature}`] = bState? '#18A0FB':'#db5f12';
        setButtonStates({...bStates});
        setButtonsColor({...bColors});
    }

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
                        <Buttons variant="contained" sx={{backgroundColor: '#18A0FB'}} key={num}>{num} Games</Buttons>
                    ))}
                </ButtonSelections>
                <GraphWrapper>
                    <RandomeChart
                        buttonStates={buttonStates}
                    />
                    <ButtonSelections>
                        {Features.map((feature: string) => (
                            <Buttons 
                                variant="contained" 
                                sx={{ 
                                    backgroundColor: `${buttonsColor[`${feature}`]}`,
                                    "&:hover": {
                                        backgroundColor: `${buttonsColor[`${feature}`]}`
                                    }
                                }} 
                                key={feature}
                                onClick={() => onSelect(feature)}
                            >
                                {feature}
                            </Buttons>
                        ))}
                    </ButtonSelections>
                </GraphWrapper>
            </MatchSummaryPaper>
        </MatchSummaryWrapper>
    )
}
