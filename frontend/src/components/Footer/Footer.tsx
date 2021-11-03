import React from 'react'
import { Link } from 'react-router-dom';

import { Tabs, Tab, Avatar } from '@mui/material';
import { FooterWrapper, ParticipantsWrapper } from './style';

export default function Footer() {
    return (
        <FooterWrapper>
            <Tabs centered variant="fullWidth" style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="github" />
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="overview" />
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="match history" />
                <Tab style={{ fontSize: "1.5rem" }} label="GPT" />
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="leaderboard" />
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="champions" />
                <Tab style={{ fontSize: "inherit", fontWeight: "inherit" }} label="riot api" />
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
