import React from 'react';

import { Grid, Avatar } from '@mui/material';

import { useAppSelector } from '../../../../redux/hooks';

import {
  ProfileWrapper,
  ChartsWrapper
} from './style';

import CircleChart from './CircleChart';

const getProfileURL = (iconID?: number) => {
  if (typeof iconID !== 'number') return undefined;
  return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

function UserSummary() {
  const {
    summonerName = "Player", 
    summonerLevel = 0, 
    summonerIcon, 
    rank = "N/A", 
    winGames = 0, 
    lossGames = 0, 
  } = useAppSelector((state) => state.user);

  const winRate = (100 * winGames / ((winGames + lossGames) || 1)).toFixed();
  // TODO: retrieve kda data from some endpoint
  const kills = 25, deaths = 12, assists = 31;
  // TODO: figure out how to display 3 lines of text with differing colors inside circle chart

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <ProfileWrapper>
          <div className="icon-wrapper">
            <Avatar src={getProfileURL(summonerIcon)} sx={{ width: '256px', height: '256px' }} />
            {summonerName}
          </div>
          <div className="header-wrapper">Details</div>
          <div>Level:<span style={{ float: "right" }}>{summonerLevel}</span></div>
          <div>Rank:<span style={{ float: "right" }}>{rank}</span></div>
          <div>Wins:<span style={{ float: "right" }}>{winGames}</span></div>
          <div>Losses:<span style={{ float: "right" }}>{lossGames}</span></div>
        </ProfileWrapper>
      </Grid>
      <Grid container item xs={12} lg={6}>
        <ChartsWrapper>
          <Grid item xs={12} lg={6}>
            <CircleChart
              title="Win Rate"
              data={[
                { name: "wins", value: winGames, color: "#3880FF" },
                { name: "losses", value: lossGames, color: "#DFDFDF" },
              ]}
              labels={[{ style: { fontSize: "1.5rem" }, value: `${winRate}%` }]}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <CircleChart
              title="Average KDA"
              data={[
                // Default value is 1, to render the chart
                { name: "kills", value: kills, color: "#77DD77" },
                { name: "deaths", value: deaths, color: "#FF6961" },
                { name: "assists", value: assists, color: "#3880FF" },
              ]}
              labels={[
                { style: { color: "#77DD77" }, value: kills.toFixed(2) },
                { style: { color: "#FF6961" }, value: deaths.toFixed(2) },
                { style: { color: "#3880FF" }, value: assists.toFixed(2) },
              ]}
            />
          </Grid>
        </ChartsWrapper>
      </Grid>
    </Grid>
  );
}

    

export default UserSummary;
