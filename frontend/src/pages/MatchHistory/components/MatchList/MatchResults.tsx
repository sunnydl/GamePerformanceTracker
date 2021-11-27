import React from 'react';

import { MatchResultsWrapper } from './style';

interface MatchResultsProps {
    win: boolean,
    kills: number,
    deaths: number,
    assists: number,
    gptScore: number
}

/**
 * Returns a functional component of the match history page that displays
 * the result of a match.
 * 
 * @param {boolean} win If the summoner won that match.
 * @param {number} kills The summoner's number of kills in that match.
 * @param {number} deaths The summoner's number of deaths in that match.
 * @param {number} assists The summoner's number of assists in that match.
 * @param {number} gptScore The summoner's performance score.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchResults({ win, kills, deaths, assists, gptScore }: MatchResultsProps) {
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
