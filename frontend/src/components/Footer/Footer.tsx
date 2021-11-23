import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import { Tabs, Tab, Avatar } from '@mui/material';
import { FooterWrapper, ParticipantsWrapper } from './style';

export default function Footer() {
    const location = useLocation();
    return (
        <FooterWrapper>
            <Tabs centered variant="fullWidth" value={false} style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="github" component={Link} to={{ pathname: "https://github.com/sunnydl/GamePerformanceTracker" }} target="_blank"/>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="overview" component={Link} to={`/overview${location.search}`}/>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="match history" component={Link} to={`/match-history${location.search}`}/>
                <Tab style={{ fontSize: "1.5rem" }} label="GPT" component={Link} to={`/landing${location.search}`}/>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="leaderboard" component={Link} to={`/leaderboard${location.search}`}/>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="champions" component={Link} to={{ pathname: "https://www.leagueoflegends.com/en-us/champions/" }} target="_blank"/>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="riot api" component={Link} to={{ pathname: "https://developer.riotgames.com/" }} target="_blank"/>
            </Tabs>
            <hr style={{ backgroundColor: "black", border: "none", height: "1px", width: "90%" }} />
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
