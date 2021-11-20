import React from 'react';

import { MatchResultsWrapper } from './style';

interface MatchResultsProps {
    win: boolean,
    kills: number,
    deaths: number,
    assists: number,
    gptScore: number
}

function MatchResults({ win, kills, deaths, assists, gptScore }: MatchResultsProps) {
    const result = win ? 'Victory' : 'Defeat';

    return (
        <MatchResultsWrapper>
            <div className={`header-wrapper ${result.toLowerCase()}`}>{result}</div>
            <div className='body-wrapper'>
                <span className='kills'>{kills}</span>
                &nbsp;/&nbsp;
                <span className='deaths'>{deaths}</span>
                &nbsp;/&nbsp;
                <span className='assists'>{assists}</span>
            </div>
            <div>{gptScore.toFixed(2)} GPT</div>
        </MatchResultsWrapper>
    );
}

export default MatchResults;
