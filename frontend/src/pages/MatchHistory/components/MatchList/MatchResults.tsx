import React from 'react';

import { MatchResultsWrapper } from './style';

interface MatchResultsProps {
    win: boolean,
    kills: number,
    deaths: number,
    assists: number
}

function MatchResults({ win, kills, deaths, assists }: MatchResultsProps) {
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
            <div>XX KDA</div>
        </MatchResultsWrapper>
    );
}

export default MatchResults;
