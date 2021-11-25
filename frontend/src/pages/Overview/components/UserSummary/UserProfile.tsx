import React from 'react';
import RankEmblemIcon from '../../../../components/RankEmblemIcon';
import { Avatar, Badge } from '@mui/material';
import { ProfileWrapper } from './style';

import { getSummonerIconURL } from '../../../../util';
import { useAppSelector } from '../../../../redux/hooks';

/**
 * Returns a functional component of the overview page that displays a
 * summoner's ranking data.
 * 
 * @returns {JSX.Element} A functional component.
 */
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
        <ProfileWrapper data-testid='user-profile'>
            <div className='icon-wrapper'>
                <Badge
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={<RankEmblemIcon rank={rank?.split(' ')?.[0] ?? 'IRON'} size={96} />}>
                    <Avatar className='profile' src={getSummonerIconURL(summonerIcon)} />
                </Badge>
                {summonerName}
            </div>
            <div className='header-wrapper'>Details</div>
            <div className='body-wrapper'>
                <div>
                    <span className='data-name'>Rank:</span>
                    <span className='data-value'>{rank}</span>
                </div>
                <div>
                    <span className='data-name'>League Points:</span>
                    <span className='data-value'>{leaguePoints}</span>
                </div>
                <div>
                    <span className='data-name'>Level:</span>
                    <span className='data-value'>{summonerLevel}</span>
                </div>
                <div>
                    <span className='data-name'>Wins | Losses:</span>
                    <span className='data-value'>{winGames} | {lossGames}</span>
                </div>
            </div>
        </ProfileWrapper>
    );
}
