import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import { Tabs, Tab, Avatar } from '@mui/material';
import { FooterBreak, FooterWrapper, ParticipantsWrapper } from './style';

export default function Footer() {
    const location = useLocation();
    return (
        <FooterWrapper>
            <Tabs centered variant="fullWidth" value={false}>
                <Tab label="github" component={Link} to={{ pathname: "https://github.com/sunnydl/GamePerformanceTracker" }} target="_blank"/>
                <Tab label="overview" component={Link} to={`/overview${location.search}`} />
                <Tab label="match history" component={Link} to={`/match-history${location.search}`} />
                <Tab className='gpt' label="GPT" component={Link} to={`/landing${location.search}`}/>
                <Tab label="leaderboard" component={Link} to={`/leaderboard${location.search}`}/>
                <Tab label="champions" component={Link} to={{ pathname: "https://www.leagueoflegends.com/en-us/champions/" }} target="_blank"/>
                <Tab label="riot api" component={Link} to={{ pathname: "https://developer.riotgames.com/apis" }} target="_blank"/>
            </Tabs>
            <FooterBreak />
            <ParticipantsWrapper>
                <Avatar src="https://avatars.githubusercontent.com/u/56567343?v=4" component={Link} to={{ pathname: "https://github.com/sunnydl" }} target="_blank" />
                <Avatar src="https://avatars.githubusercontent.com/u/35276423?v=4" component={Link} to={{ pathname: "https://github.com/mzhou579" }} target="_blank" />
                <Avatar src="https://avatars.githubusercontent.com/u/60027265?v=4" component={Link} to={{ pathname: "https://github.com/Hao-bot-5000" }} target="_blank" />
                <Avatar src="https://avatars.githubusercontent.com/u/46057691?v=4" component={Link} to={{ pathname: "https://github.com/erlyu" }} target="_blank" />
                <Avatar src="https://avatars.githubusercontent.com/u/3110882?v=4" component={Link} to={{ pathname: "https://github.com/Jventoo" }} target="_blank" />
            </ParticipantsWrapper>
            <div>All content and trademarks property of their respective owners.</div>
        </FooterWrapper>
    )
}
