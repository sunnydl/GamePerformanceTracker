import React from 'react';
import Avatar from '@mui/material/Avatar';
import { ProfileWrapper } from './style';

import { getSummonerIconURL, displayWinRate } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

export default function UserProfile() {
    const {
        summonerName,
        summonerIcon,
        leaguePoints,
        rank,
        summonerLevel,
        winGames,
        lossGames
    } = useAppSelector((state) => state.user);

    return (
        <ProfileWrapper>
            <div className="icon-wrapper">
                <Avatar src={getSummonerIconURL(summonerIcon)} />
                {summonerName}
            </div>
            <div className="header-wrapper">Details</div>
            <div className="body-wrapper">
                <div>Rank:<span>{rank}</span></div>
                <div>League Points:<span>{leaguePoints}</span></div>
                <div>Level:<span>{summonerLevel}</span></div>
                <div>Win Rate:<span>{displayWinRate(winGames, lossGames, true)}</span></div>
            </div>
        </ProfileWrapper>
    );
}
